import { createContext } from "react"
import { useReducer,useEffect } from "react"
export const todoItemsStore=createContext({TodoItems:[]
    ,onAdd:()=>{},
    onDelete:()=>{}
})
const ItemsReducer=(currvalue,action)=>{
  let newItems=currvalue
  if(action.type==='NEW_ITEM'){
    newItems=[...currvalue,{todoName:action.payload.name,todoDate:action
      .payload.date
    }]
  }
    else if (action.type==="DELETE_ITEM"){
      newItems=currvalue.filter(item=>!(item.todoName===action.payload.name &&
        item.todoDate===action.payload.date)
      )
    }
  return newItems;
}
 const getInitialTodos = () => {
    const saved = localStorage.getItem("todoItems");
    return saved ? JSON.parse(saved) : [];
  };
 export const TodoItemsContextProvider=({children})=>{
    const [item,dispatchItems]=useReducer(ItemsReducer,[],getInitialTodos)
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(item));
  }, [item]);
  const onAdd=(name,date)=>{
      const newItems={
        type:"NEW_ITEM",
        payload:{
          name,
          date
        }
      }
      dispatchItems(newItems)
  }
    const onDelete=(name,date)=>{
      const deleteItems={
        type:"DELETE_ITEM",
        payload:{
          name,
          date
        }
      }
      dispatchItems(deleteItems)
  }

return(<todoItemsStore.Provider value={{todoItems:item,
    onAdd,
    onDelete
  }}>{children}</todoItemsStore.Provider>)}
  
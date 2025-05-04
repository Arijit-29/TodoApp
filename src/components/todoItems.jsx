import { useContext } from "react"
import { todoItemsStore } from "../store/todoItemsStore.jsx"
import styles from "./todoItems.module.css"
import Todos from "./Todos.jsx"
const TodoItems=()=>{
    const contextObj=useContext(todoItemsStore)
    const todoItems=contextObj.todoItems
    const {onDelete}=useContext(todoItemsStore)
return (
<div className={styles.Todos}>
   {
    todoItems.map(item=> (<Todos todoDate={item.todoDate} todoName={item.todoName}
   key={item.todoName}
    ></Todos>
    ))}
    
    </div>
)
}
export default TodoItems
import AppName from "./components/AppName.jsx"
import TodoAdder from "./components/TodoAdder.jsx"
import TodoItems from "./components/todoItems.jsx";
import WelcomeMessage from "./components/welcomeMessage.jsx";
import "./App.css";
import { useState,useEffect } from "react";
function App() {
  const getInitialTodos = () => {
    const saved = localStorage.getItem("todoItems");
    return saved ? JSON.parse(saved) : [];
  };
  const [item,setItem]=useState(getInitialTodos)
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(item));
  }, [item]);
  const onAdd=(name,date)=>{
        
        setItem((currvalue)=>{
          const newItems=[...currvalue,{todoName:name,todoDate:date},]
          return newItems
        })
  }
 const onDelete=(name)=>{
    const newItems=item.filter(item=>item.todoName!==name)
    setItem(newItems)
 }
  return (
    <center className="todo_container">
    <AppName></AppName>
    <TodoAdder onAdd={onAdd}></TodoAdder>
    {item.length===0?<WelcomeMessage></WelcomeMessage>:<></>}
    <TodoItems todoItems={item} onDelete={onDelete} key={item.name}></TodoItems>
  </center>
  )
}

export default App

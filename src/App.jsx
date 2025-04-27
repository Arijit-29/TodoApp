import AppName from "./components/AppName.jsx"
import TodoAdder from "./components/TodoAdder.jsx"
import TodoItems from "./components/todoItems.jsx";
import WelcomeMessage from "./components/welcomeMessage.jsx";
import "./App.css";
import { useState } from "react";
function App() {
  const todoItems=[]
  const [item,setItem]=useState(todoItems)
  const onAdd=(name,date)=>{
        console.log({name},{date})
        const newItems=[...item,{todoName:name,todoDate:date},]
        setItem(newItems)
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

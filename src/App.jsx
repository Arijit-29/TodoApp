import AppName from "./components/AppName.jsx"
import TodoAdder from "./components/TodoAdder.jsx"
import TodoItems from "./components/todoItems.jsx";
import WelcomeMessage from "./components/welcomeMessage.jsx";
import "./App.css";
import {TodoItemsContextProvider} from "./store/todoItemsStore.jsx";
function App() {
  return (
    <TodoItemsContextProvider>
    <center className="todo_container">
    <AppName/>
    <TodoAdder/>
    <WelcomeMessage/>
    <TodoItems/>
  </center></TodoItemsContextProvider>
  )
}

export default App

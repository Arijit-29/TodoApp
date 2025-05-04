import styles from "./Welcome.module.css"
import { useContext } from "react"
import { todoItemsStore } from "../store/todoItemsStore"
const WelcomeMessage=()=>{
   const contextObj=useContext(todoItemsStore)
   const todoItems=contextObj.todoItems
   return (
   todoItems.length===0 && <p className={styles.welcome}>Enjoy Your Day</p>)
}
export default WelcomeMessage
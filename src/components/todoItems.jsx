import styles from "./todoItems.module.css"
import Todos from "./Todos.jsx"
const TodoItems=({todoItems,onDelete})=>{
return (
<div className={styles.Todos}>
   {
    todoItems.map(item=> (<Todos todoDate={item.todoDate} todoName={item.todoName}
    onDelete={onDelete} key={item.todoName}
    ></Todos>
    ))}
    
    </div>
)
}
export default TodoItems
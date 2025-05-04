import { useContext } from "react";
import styles from "./todoItems.module.css"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { todoItemsStore } from "../store/todoItemsStore";
function Todos({todoName,todoDate}){
  const {onDelete}=useContext(todoItemsStore)
return (
    <div className={styles.container}>
    <div className={`row ${styles.row}`}>
      <div className="col-5">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <center className="col-3"><button type="button" className="btn btn-danger" onClick={()=>onDelete(todoName,todoDate)}>< RiDeleteBin6Fill/></button></center>
    </div></div>
    
)
}
export default Todos
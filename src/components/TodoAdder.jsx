import { useRef} from "react";
import styles from "./TodoAdder.module.css"
import { BiSolidAddToQueue } from "react-icons/bi";
function TodoAdder({onAdd}){
      const todoname=useRef()
      const tododate=useRef()
      const addButtonClicked=(event)=>{
       event.preventDefault();
       const name=todoname.current.value;
       const date=tododate.current.value;
       todoname.current.value=""
       tododate.current.value=""
       onAdd(name,date)
        
      }
    return(
    <div className={styles.container}><form onSubmit={addButtonClicked}>
    <div className={`row ${styles.row}`}>
    <div className="col-5"><input type="text" placeholder="Enter todo here" ref={todoname}
    ></input></div>
    <div className="col-4"><input type="date" ref={tododate}></input></div>
    <center className="col-3"><button type="submit" className="btn btn-success"
    ><BiSolidAddToQueue/></button></center>
  </div></form></div>
    );
}
export default TodoAdder
import { useState } from "react";
import styles from "./TodoAdder.module.css"
import { BiSolidAddToQueue } from "react-icons/bi";
function TodoAdder({onAdd}){
      const[name,setName]=useState("")
      const[date,setDate]=useState("")
      const nameChange=(event)=>{
        setName(event.target.value)
      }
      const dateChange=(event)=>{
          setDate(event.target.value)
      }
      const addButtonClicked=()=>{
        onAdd(name,date)
        setDate("")
        setName("")
      }
    return(
    <div className={styles.container}>
    <div className={`row ${styles.row}`}>
    <div className="col-5"><input type="text" placeholder="Enter todo here" value={name}
    onChange={nameChange}
    ></input></div>
    <div className="col-4"><input type="date" onChange={dateChange} value={date}></input></div>
    <center className="col-3"><button type="button" className="btn btn-success"
    onClick={addButtonClicked
      
    }
    ><BiSolidAddToQueue/></button></center>
  </div></div>
    );
}
export default TodoAdder
import "./AllTasks.css"
import data from "../data"
import { useState } from "react";

const AllTasks = () => {
  const [myTasks, setMyTasks] = useState(data);

  const handleDelete = (idecko) => {
    const filteredTask = myTasks.filter((oneTask) => {
      return oneTask.id !== idecko;
    } );
    setMyTasks(filteredTask);
  };
  
  const deleteAllBtn = () => {
    setMyTasks([]);
  }

  return (
      <div>{
        myTasks.map((oneTask) => {
          const {id, name} = oneTask

          return <div className="one-task" key={id} >
                    <h4>{name}</h4>
                    <button onClick={ () => handleDelete(oneTask.id)}>Delete</button>
                 </div>
        })      
       }
       <button className="main-button" onClick={deleteAllBtn}>Delete all</button>
      </div>
  )
}   
      


export default AllTasks;
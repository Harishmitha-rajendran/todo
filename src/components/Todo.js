import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";

function Todo ({task,toggleComplete,deleteTodo,editTodo}) {
  return (
    <div className='Todo'>
      <p onClick={()=>toggleComplete(task.id)}
         className={`${task.completed?'completed':''}`}
      >
        {task.task}
      </p>
      <div>
         <FaPenToSquare onClick={()=>editTodo(task.id) } />
         <FaTrashCan className='fa-trash' onClick={()=>deleteTodo(task.id) }   />
      </div>
    </div>
  )
}

export default Todo
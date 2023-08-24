import React,{useState} from 'react'
//import { FaBookmark } from "react-icons/fa6";

export default function EditTodoForm  ({editTodo,task})  {

    const [value,setValue]=useState(task.task);

    const handleSubmit=e=>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("")
    }

  return (
    <form className="TodoForm" onSubmit={(e)=>handleSubmit(e)}>
        <input 
          type="text" 
          autoFocus
          className='todo-input' 
          value={value}
          placeholder='update task'
          onChange={(e)=>setValue(e.target.value)}
        />
        <button 
          type='submit' 
          className='todo-btn' 
          tabIndex={0}
        > 
        Edit Task
        </button>
    </form>
  )
}
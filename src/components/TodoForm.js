//import React,{useState} from 'react'
import { FaSistrix } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


export const TodoForm=({addTodo,handleSubmit,value,setValue,search,setSearch})=>  {

 
  return (
    <>
    <form className="TodoForm" onSubmit={(e)=>handleSubmit(e)}>
        <input 
          required
          type="text" 
          autoFocus
          className='todo-input' 
          value={value}
          placeholder='What is the task today ?'
          onChange={(e)=> setValue(e.target.value) }
        />
        <button 
          type='submit' 
          className='todo-btn' 
          tabIndex={0}
        > 
        <FaPlus />
        </button>
    </form>
    <form onSubmit={(e)=>e.preventDefault()}>
      <input 
          type="text"
          className="todo-input" 
          style={{marginTop:'0rem'}}
          placeholder="Search for tasks"
          value={search}  //type panra value search la poi store agu
          onChange={(e)=> setSearch(e.target.value) }
        />
        <button
          type="button"
          className="todo-btn"
        >
        <FaSistrix />
        </button>
    </form>
    </>
  )
}

//export default TodoForm
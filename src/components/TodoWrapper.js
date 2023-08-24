import React,{useState} from 'react'
import {TodoForm} from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
//uuidv4();

function TodoWrapper ()  {

  const [value,setValue]=useState('');
  const [todos,setTodos]=useState(JSON.parse(localStorage.getItem("todolist"))) ; 
  const [search,setSearch]=useState('') ;

  const handleSubmit=(e)=>{
    e.preventDefault();
     if(value)
     {
    addTodo(value);
    setValue('')
    }
};

  const addTodo=todo=> {
        const newtodos= [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]
       console.log(newtodos);
       setTodos(newtodos);
       localStorage.setItem("todolist",JSON.stringify(newtodos));
    }

    const toggleComplete= (id) =>{
          const newtodos=todos.map(todo => 
            todo.id === id? {...todo,completed:!todo.completed}:todo
          )
          setTodos(newtodos)
         localStorage.setItem("todolist",JSON.stringify(newtodos));
    }

    const deleteTodo =(id) =>{
          const newtodos= todos.filter(todo =>
          todo.id !== id  
          );
          setTodos(newtodos);
          localStorage.setItem("todolist",JSON.stringify(newtodos));
    }

    const editTodo =(id)=>{
        const newtodos=todos.map(todo=>
          todo.id === id?{...todo,isEditing:!todo.isEditing} : todo
          );
          setTodos(newtodos)
          localStorage.setItem("todolist",JSON.stringify(newtodos));
    }

    const editTask=(task,id)=>{
         const newtodos=todos.map(todo=>
          todo.id === id?{...todo,task,isEditing:!todo.isEditing} : todo  //or simply ,task:task, it also updates
          );
          setTodos(newtodos)
          localStorage.setItem("todolist",JSON.stringify(newtodos));
    }

 
    const filteredtasks= todos.filter(todo=>(todo.task).toLowerCase().includes(search.toLowerCase()))
        
         .map(todo =>

          todo.isEditing  ?  <EditTodoForm editTodo={editTask} task={todo} />     :
          <Todo  key={todo.id} task={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} /> 
          
          )


  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>
      
        <TodoForm addTodo={addTodo} handleSubmit={handleSubmit} value={value} setValue={setValue} search={search} setSearch={setSearch} />

        { 
       filteredtasks
        }

       { search!=='' ?  (
                         <footer className='foot'>
                         <p> {filteredtasks.length} matches found </p> 
                         </footer>
                        )
                     :  (
                        <footer className='foot'>
                        <p>You have {todos.length} pending tasks</p> 
                        </footer>
                        )
        }
        
    </div>
  )
}

export default TodoWrapper;
import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({todo, setTodo}) {
    
    const removeHandler=()=>{
        setTodo(todo.filter((el) => el.id !== el.id))
        console.log(todo)
    }
   

    return (
        <>     
        <div className="list-container"> 
         <li className="todo-item" key={todo.id}>{todo.text}</li>
         
        <Button variant="contained" color="secondary" size="small">
        <DeleteIcon onClick={removeHandler}/>
        </Button>
        </div>
        </>

        
    )
}

export default Todo

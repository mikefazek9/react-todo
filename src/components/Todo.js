import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo({todo, input, key}) {
    
    

    return (
        <div className="todo">
        
        <li className="todo-item" key={key}>{todo}</li>
        <Button variant="contained" color="secondary" size="small">
        <DeleteIcon/>
        </Button>
        
        </div>
    )
}

export default Todo

import React from 'react'
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
function Form({input, setInput, todo, setTodo}) {

// handles text from prevent default
 const TextHandler=(e)=>{
    e.preventDefault();
    setInput(e.target.value)
    
 }

 const submitTodo=(e)=>{
     e.preventDefault()
    setTodo([
        ...todo,{text: input, id: Math.floor(Math.random()* 10000)}
    ]);
    setInput("");
 }

  
    return (
        <div className="form">
            <form>
                <Input className="input" htmlFor="text" placeholder="input Task" value={input} onChange={TextHandler} style={{marginRight: 5}}/>
                
            <Button variant="contained" color="primary" size="small" onClick={submitTodo}>Add Task</Button>
            </form>
            
            
        </div>
    )
}

export default Form

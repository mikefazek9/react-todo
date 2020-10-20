import React from 'react'
import Todo from "./Todo"
function TodoList({todo,input,id}) {
    
    return (
        <div className="todo-container">
                <ul className="todo-list">
                {todo.map(todo =>(
                    <Todo todo={input} key={id}/>
                ))}
                    
                </ul>
        </div>
    )
}

export default TodoList

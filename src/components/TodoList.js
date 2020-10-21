import React from 'react'
import Todo from "./Todo"
function TodoList({todo, setTodo, input}) {
    
    return (
        <div className="todo-container">
                <ul className="todo-list">
                {todo.map(todo =>(
                    <Todo todo={todo} key={todo.id.toString()} input={input} setTodo={setTodo}/>
                ))}
                    
                </ul>
        </div>
    )
}

export default TodoList

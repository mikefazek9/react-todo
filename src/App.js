import React,{useState} from 'react';
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import './App.css';

function App() {
  const [input, setInput]=useState("") // empty textfield
  const [todo, setTodo]=useState([]);
  
  return (
    <div className="App">
    <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo}/>
    <TodoList todo={todo} input={input}/>
    </div>
  );
}

export default App;

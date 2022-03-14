import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import pic from "./to-do-list-apps.png";

function App() {
  //STATES
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //RUN ONCE WHEN APP STARTS
  useEffect(() => {
    getLocalTodos()
  }, [])
  //USE EFFECT
  useEffect(() => {
    saveLocalTodos()
    filterHandler()
  }, [todos, status])
  //FUNCTIONS
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
        
      default:
        setFilteredTodos(todos)
        break
    }
  }

  //SAVE TO LOCAL
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null)
      localStorage.setItem('todos', JSON.stringify([]))
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <div className="imgLink">
        <img src={pic} alt="todo-img" />
      </div>
      <header>
        <h1>Your Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

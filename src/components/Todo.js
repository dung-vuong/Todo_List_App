import React from "react";

const Todo = ({text, todo, todos, setTodos, date}) => {
    //EVENTS
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    const deleteHandler = () => {
        //check the id we click on == to the todo.id (if yes, delete it)
        if (window.confirm("Are you sure to delete!?") === true) 
            setTodos(todos.filter((el) => el.id !== todo.id))
    }
    return(
        <div className="todo">
            <li className="date-text">{date}</li>
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo
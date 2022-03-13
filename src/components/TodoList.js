import React from "react";
import Todo from "./Todo"

const TodoList = ({todos, setTodos, filteredTodos, cdate}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        setTodos={setTodos} 
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text}
                        cdate={cdate}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
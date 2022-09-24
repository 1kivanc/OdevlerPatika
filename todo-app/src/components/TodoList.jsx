import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos,deleteTodo }) {
  return (
    <div className="todo-container">
         {todos.map((todo,index) => (
            <TodoItem id={index} todo={todo} deleteTodo={deleteTodo}  />
         ))}
    </div> 
  )
}

export default TodoList
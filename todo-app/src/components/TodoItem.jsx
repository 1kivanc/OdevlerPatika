import React from 'react'

function TodoItem({todo,deleteTodo,id}) {
  return (
    <div  className="todo-item">
    <p>{todo}</p>
    <i id='delete' class="fa-solid fa-trash" onClick={() => {
            deleteTodo(id)
    }}></i>
    </div>
  )
}

export default TodoItem
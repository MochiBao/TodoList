import React from 'react'

const TodoItem = ({label, checked, deleteTodo, id}) => {
  return (
    <li>
        <input type="checkbox" name="" id="" checked={checked} />
        <p>{label}</p>
        <button onClick={(e) => {deleteTodo(id)}}>Delete</button>
    </li>
  )
}

export default TodoItem
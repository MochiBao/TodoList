import React from 'react'
import TodoItem from '../todoItem/TodoItem'

const TodoList = ({data, deleteTodo}) => {
  return (
    <ul>
        {data.map((data) => {
            return (
                <TodoItem key={data.id} deleteTodo={deleteTodo} id={data.id} label={data.text} checked={data.completed}

                />
            )
        })}
    </ul>
  )
}

export default TodoList
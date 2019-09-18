import React from 'react'

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <li
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
        key={todo.id}
      >
        {todo.task}
      </li>
    ))}
  </ul>
)

export default TodoList

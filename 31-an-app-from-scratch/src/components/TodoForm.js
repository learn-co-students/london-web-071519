import React from 'react'

const TodoForm = props => {
  const handleChange = e => props.updateFormInput(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodo()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={props.formInput}
        onChange={handleChange}
        placeholder='enter your todo here'
      />
      <button>ADD TODO</button>
    </form>
  )
}

export default TodoForm

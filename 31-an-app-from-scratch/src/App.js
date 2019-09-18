import React from 'react'

import Title from './components/Title'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    formInput: '',
    todos: [
      {
        id: 1,
        task: 'Buy milk',
        completed: false
      },
      {
        id: 2,
        task: 'Cook dinner',
        completed: false
      },
      {
        id: 3,
        task: 'Conquer the world',
        completed: false
      }
    ]
  }

  updateFormInput = newFormInput => {
    this.setState({ formInput: newFormInput })
  }

  addTodo = () => {
    const todo = {
      id: this.state.todos.length + 1,
      task: this.state.formInput,
      completed: false
    }
    const newTodos = [todo, ...this.state.todos]
    this.setState({ todos: newTodos, formInput: '' })
  }

  render () {
    return (
      <div className='App'>
        <Title />
        <TodoForm
          addTodo={this.addTodo}
          updateFormInput={this.updateFormInput}
          formInput={this.state.formInput}
        />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App

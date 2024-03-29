import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'

import API from '../API'

class SignInForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
    const { username, password } = this.state
    API.signIn({ username, password })
      .then(data => {
        if (data.error) {
          throw Error(data.error)
        } else {
          this.props.signIn(data)
          this.props.history.push('/inventory')
        }
      })
      .catch(error => {
        alert(error)
      })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { username, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <FormControl>
        <TextField
          id='usernameInput'
          label='Username'
          value={username}
          onChange={handleChange}
          margin='normal'
          name='username'
        />
        <br />
        <TextField
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          margin='normal'
          name='password'
          type='password'
        />
        <br />
        <Button onClick={handleSubmit} variant='contained' color='primary'>
          SUBMIT
        </Button>
      </FormControl>
    )
  }
}

export default SignInForm

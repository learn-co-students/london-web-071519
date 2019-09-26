import React from 'react'

import Button from '@material-ui/core/Button'

import logo from '../logo.svg'

const Header = ({ username, signOut }) => (
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1 className='App-title'>
      {username ? `Welcome back, ${username}!` : 'Welcome to React.'}
      <br />
      {username && (
        <Button variant='contained' color='primary' onClick={signOut}>
          SIGN OUT
        </Button>
      )}
    </h1>
  </header>
)

export default Header

import React from 'react'

import Navbar from './components/Navbar'

import PaintingList from './components/PaintingList'

const App = () => {
  return (
    <div className='ui container'>
      <Navbar
        color='blue'
        icon='react'
        title='My painting app'
        subtitle="Gotta like 'em all"
      />
      <PaintingList />
    </div>
  )
}

export default App

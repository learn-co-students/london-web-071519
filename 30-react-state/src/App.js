import React from 'react'

import Navbar from './components/Navbar'
import Search from './components/Search'

import PaintingList from './components/PaintingList'

class App extends React.Component {
  state = {
    searchTerm: ''
  }

  updateSearchTerm = newSearchTerm => {
    this.setState({ searchTerm: newSearchTerm })
  }

  render () {
    return (
      <div className='ui container'>
        <Navbar
          color='blue'
          icon='react'
          title='My painting app'
          subtitle="Gotta like 'em all"
        />
        <Search updateSearchTerm={this.updateSearchTerm} />
        <PaintingList searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default App

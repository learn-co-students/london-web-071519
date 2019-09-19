import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import HogList from './HogList'
import hogData from '../porkers_data'

class App extends Component {
  state = {
    hogs: hogData,
    showGreasedOnly: false,
    sortBy: 'weight'
  }

  toggleGreasedHogs = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  getFilteredHogs = () => {
    const { hogs, showGreasedOnly } = this.state

    return showGreasedOnly ? hogs.filter(hog => hog.greased) : hogs
  }

  render () {
    const { toggleGreasedHogs } = this
    const hogs = this.getFilteredHogs()
    return (
      <div className='App'>
        <Nav toggleGreasedHogs={toggleGreasedHogs} />
        <HogList hogs={hogs} />
      </div>
    )
  }
}

export default App

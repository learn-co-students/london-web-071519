import React, { Component } from 'react'
import '../App.css'
import Nav from './Nav'
import HogList from './HogList'
import hogData from '../porkers_data'

const sortByWeight = (a, b) => a.weight - b.weight
const sortByName = (a, b) => a.name.localeCompare(b.name)

class App extends Component {
  state = {
    hogs: hogData,
    showGreasedOnly: false,
    sortBy: ''
  }

  toggleGreasedHogs = () => {
    this.setState({ showGreasedOnly: !this.state.showGreasedOnly })
  }

  updateSortBy = e => {
    this.setState({ sortBy: e.target.value })
  }

  sortByWeight = hogs => [...hogs].sort(sortByWeight)

  sortByName = hogs => [...hogs].sort(sortByName)

  getSortedHogs = hogs => {
    switch (this.state.sortBy) {
      case 'weight':
        return this.sortByWeight(hogs)
      case 'name':
        return this.sortByName(hogs)
      default:
        return hogs
    }
  }

  getFilteredHogs = hogs => {
    const { showGreasedOnly } = this.state

    return showGreasedOnly ? hogs.filter(hog => hog.greased) : hogs
  }

  getFilteredAndSortedHogs = hogs =>
    this.getSortedHogs(this.getFilteredHogs(hogs))

  render () {
    const { toggleGreasedHogs, updateSortBy } = this
    const filteredAndSortedHogs = this.getFilteredAndSortedHogs(this.state.hogs)
    console.log(this.state)
    return (
      <div className='App'>
        <Nav
          toggleGreasedHogs={toggleGreasedHogs}
          updateSortBy={updateSortBy}
        />
        <HogList hogs={filteredAndSortedHogs} />
      </div>
    )
  }
}

export default App

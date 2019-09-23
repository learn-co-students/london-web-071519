import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'

import PaintingList from './components/PaintingList'
import PaintingDetails from './components/PaintingDetails'

import API from './api'

class App extends React.Component {
  state = {
    searchTerm: '',
    paintings: []
  }

  updateSearchTerm = newSearchTerm => {
    this.setState({ searchTerm: newSearchTerm })
  }

  removePainting = id => {
    const newPaintings = this.state.paintings.filter(
      painting => painting.id !== id
    )

    API.deletePainting(id).then(() =>
      this.setState({ paintings: newPaintings })
    )
  }

  increaseLikes = id => {
    const newPaintings = this.state.paintings.map(painting =>
      painting.id === id ? { ...painting, votes: painting.votes + 1 } : painting
    )

    this.setState({ paintings: newPaintings })
  }

  getFilteredPaintings = () =>
    this.state.paintings.filter(painting =>
      painting.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    )

  getPaintings = () => {
    API.getPaintings().then(paintings => this.setState({ paintings }))
  }

  componentDidMount() {
    this.getPaintings()
  }

  render() {
    const filteredPaintings = this.getFilteredPaintings()
    return (
      <div className='ui container'>
        <Navbar
          color='blue'
          icon='react'
          title='My painting app'
          subtitle="Gotta like 'em all"
          updateSearchTerm={this.updateSearchTerm}
        />
        <Switch>
          <Route exact path='/' component={() => <h1>Home Page</h1>} />
          <Route exact path='/paintings' component={routerProps =>
            <PaintingList
              {...routerProps}
              searchTerm={this.state.searchTerm}
              paintings={filteredPaintings}
            />}
          />
          <Route path='/paintings/:id' component={routerProps => {
            const id = routerProps.match.params.id
            const painting = this.state.paintings.find(painting => painting.id === id)
            if (this.state.paintings.length === 0) return <h1>Loading...</h1>
            if (painting === undefined) return <h1>Painting not found</h1>
            return <PaintingDetails {...routerProps} painting={painting} />
          }} />
          <Route component={() => <h1>404 - Page Not Found</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

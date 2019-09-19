import React from 'react'
import Painting from './Painting'

import API from '../api'

class PaintingList extends React.Component {
  state = {
    paintings: []
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
      painting.title.toLowerCase().includes(this.props.searchTerm.toLowerCase())
    )

  getPaintings = () => {
    API.getPaintings().then(paintings => this.setState({ paintings }))
  }

  componentDidMount () {
    console.log('PaintingList finished rendering')
    this.getPaintings()
  }

  componentDidUpdate () {
    console.log('PaintingList is done updating')
  }

  render () {
    console.log('PaintingList started rendering')
    const filteredPaintings = this.getFilteredPaintings()
    return (
      <div className='ui four cards'>
        {filteredPaintings.map(painting => (
          <Painting
            key={painting.id}
            painting={painting}
            removePainting={this.removePainting}
            increaseLikes={this.increaseLikes}
          />
        ))}
      </div>
    )
  }
}

export default PaintingList

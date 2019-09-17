import React from 'react'
import Painting from './Painting'

import paintings from '../data/paintings'

class PaintingList extends React.Component {
  state = {
    paintings: paintings
  }

  removePainting = id => {
    const newPaintings = this.state.paintings.filter(
      painting => painting.id !== id
    )
    this.setState({ paintings: newPaintings })
  }

  increaseLikes = id => {
    // we want to increase the likes of a painting immutably
    // here's what we want to achieve memory wise:

    // create a new array with all the same paintings
    // but a copy of the one we want to change
    // [m2, m3, m4, m5] // m1
    // [m2, m3b, m4, m5] // m6

    // imperative way:

    // copy the original array (shallow copy, means the insides are still the same)
    // const newPaintings = [...this.state.paintings]

    // find the painting we want to update
    // const targetPainting = newPaintings.find(painting => painting.id === id)

    // make a copy of it
    // const copyOfPainting = JSON.parse(JSON.stringify(targetPainting))

    // increase the likes of that copy
    // copyOfPainting.votes++

    // replace the original one with the copy in the new array
    // const targetIndex = newPaintings.indexOf(targetPainting)
    // newPaintings[targetIndex] = copyOfPainting

    // declarative way:
    const newPaintings = this.state.paintings.map(painting =>
      painting.id === id ? { ...painting, votes: painting.votes + 1 } : painting
    )

    this.setState({ paintings: newPaintings })
  }

  render () {
    return (
      <div className='ui four cards'>
        {this.state.paintings.map(painting => (
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

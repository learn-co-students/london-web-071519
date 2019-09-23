import React from 'react'
import Painting from './Painting'

class PaintingList extends React.Component {
  render() {
    return (
      <div className='ui four cards'>
        {this.props.paintings.map(painting => (
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

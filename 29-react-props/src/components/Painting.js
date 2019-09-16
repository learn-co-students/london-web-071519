import React from 'react'

const Painting = props => (
  <div className='ui card'>
    <div className='image'>
      <img src={props.painting.image} />
    </div>
    <div className='content'>
      <a className='header'>{props.painting.title}</a>
      <a className='meta'>{props.painting.artist.name}</a>
    </div>
  </div>
)

export default Painting

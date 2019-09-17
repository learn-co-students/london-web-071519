import React from 'react'

const Painting = props => (
  <div className='ui card'>
    <div
      className='ui image'
      style={{
        height: '300px',
        background: `url(${props.painting.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className='content'>
      <p className='header'>{props.painting.title}</p>
      <p className='meta'>{props.painting.artist.name}</p>
    </div>
    <div class='extra content'>
      <p
        onClick={() => {
          props.increaseLikes(props.painting.id)
        }}
      >
        <i class='like icon' />
        {props.painting.votes} Likes
      </p>
      <p
        onClick={() => {
          props.removePainting(props.painting.id)
        }}
      >
        <i class='trash icon' />
      </p>
    </div>
  </div>
)

export default Painting

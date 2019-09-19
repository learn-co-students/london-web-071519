import React from 'react'

class Painting extends React.Component {
  componentDidMount () {
    console.log('Painting finished rendering')
  }

  render () {
    console.log('Painting started rendering')
    return (
      <div className='ui card'>
        <div
          className='ui image'
          style={{
            height: '300px',
            background: `url(${this.props.painting.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className='content'>
          <p className='header'>{this.props.painting.title}</p>
          <p className='meta'>{this.props.painting.artist.name}</p>
        </div>
        <div class='extra content'>
          <p
            onClick={() => {
              this.props.increaseLikes(this.props.painting.id)
            }}
          >
            <i class='like icon' />
            {this.props.painting.votes} Likes
          </p>
          <p
            onClick={() => {
              this.props.removePainting(this.props.painting.id)
            }}
          >
            <i class='trash icon' />
          </p>
        </div>
      </div>
    )
  }
}

export default Painting

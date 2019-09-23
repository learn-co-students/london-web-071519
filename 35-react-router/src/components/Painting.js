import React from 'react'

import { withRouter } from 'react-router-dom'

class Painting extends React.Component {
  render() {
    return (
      <div className='ui card' onClick={() => this.props.history.push(`/paintings/${this.props.painting.id}`)}>
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
        <div className='extra content'>
          <p
            onClick={() => {
              this.props.increaseLikes(this.props.painting.id)
            }}
          >
            <i className='like icon' />
            {this.props.painting.votes} Likes
          </p>
          <p
            onClick={() => {
              this.props.removePainting(this.props.painting.id)
            }}
          >
            <i className='trash icon' />
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(Painting)

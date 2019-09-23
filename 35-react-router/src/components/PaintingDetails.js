import React from 'react'

import { Link } from 'react-router-dom'

class Painting extends React.Component {
  render() {
    return (
      <div className='ui card centered' style={{ width: '600px' }}>
        <div className='extra content'>
          <Link to='/paintings'>
            <i className='back icon' />
            Back
          </Link>
        </div>
        <div className='content'>
          <p className='header'>{this.props.painting.title}</p>
          <p className='meta'>By {this.props.painting.artist.name} from {this.props.painting.artist.hometown} | ({this.props.painting.artist.birthday} - {this.props.painting.artist.deathday})</p>
        </div>
        <div
          className='ui image'
          style={{
            height: '500px',
            background: `url(${this.props.painting.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
      </div>
    )
  }
}

export default Painting

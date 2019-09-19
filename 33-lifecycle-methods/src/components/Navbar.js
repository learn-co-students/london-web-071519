import React from 'react'
import TimeInPage from './TimeInPage'

class Navbar extends React.Component {
  state = {
    showTimer: true
  }

  hideTimer = () => {
    this.setState({ showTimer: false })
  }

  render () {
    const { color, icon, title, subtitle } = this.props
    return (
      <div className={`ui inverted ${color} menu`}>
        <p className='item'>
          <h2 className='ui header'>
            <i className={`${icon} icon`} />
            <div className='content'>{title}</div>
            <div className='sub header'>{subtitle.toUpperCase()}</div>
          </h2>
        </p>
        {this.state.showTimer && <TimeInPage />}
        <button onClick={this.hideTimer}>X</button>
      </div>
    )
  }
}

export default Navbar

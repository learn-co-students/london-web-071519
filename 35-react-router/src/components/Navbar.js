import React from 'react'

import { NavLink } from 'react-router-dom'

import Search from './Search'

const linkStyle = {
  color: 'white'
}

class Navbar extends React.Component {
  render() {
    const { color, icon, title, subtitle } = this.props
    return (
      <div className={`ui inverted ${color} menu`}>
        <a href='/' className='item'>
          <h2 className='ui header'>
            <i className={`${icon} icon`} />
            <div className='content'>{title}</div>
            <div className='sub header'>{subtitle.toUpperCase()}</div>
          </h2>
        </a>
        <NavLink to='/' style={linkStyle}>Home</NavLink>
        <NavLink to='/paintings' style={linkStyle}>Paintings</NavLink>
        <Search updateSearchTerm={this.props.updateSearchTerm} />
      </div>
    )
  }
}

export default Navbar

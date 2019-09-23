import React from 'react'

const Search = props => (
  <div style={{ margin: '30px 0 30px 100px', width: '400px' }} className='ui action input'>
    <input
      onChange={event => {
        props.updateSearchTerm(event.target.value)
      }}
      type='text'
      placeholder='Search...'
    />
    <button className='ui icon button'>
      <i className='search icon' />
    </button>
  </div>
)

export default Search

import React from 'react'

const Search = props => (
  <div style={{ marginBottom: '15px' }} className='ui action input'>
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

import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
// import { SELECT_ACTIVE_PAINTING } from '../actions/types'

console.log('actions:', actions)

const PaintingListItem = ({ painting, selectPainting }) => {
  return (
    <div onClick={() => selectPainting(painting.id)} className='ui item'>
      <span style={{ cursor: 'pointer' }}>{painting.title}</span>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   selectPainting: id => dispatch({ type: SELECT_ACTIVE_PAINTING, id: id })
// })

export default connect(
  null,
  actions
)(PaintingListItem)

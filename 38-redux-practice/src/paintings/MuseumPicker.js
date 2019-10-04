import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const MuseumPicker = ({ selectMuseum, deselectMuseum, selectedMuseum }) => {
  return (
    <div className='row'>
      <div className='ui menu'>
        <div
          className={`${selectedMuseum === '' ? 'active' : ''} item`}
          onClick={deselectMuseum}
        >
          All Museums
        </div>
        <div
          className={`${
            selectedMuseum === 'National Gallery of Art, Washington D.C.'
              ? 'active'
              : ''
          } item`}
          onClick={e => selectMuseum(e.target.innerText)}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  )
}

const actualActions = {
  selectMuseum: actions.selectMuseum,
  deselectMuseum: actions.deselectMuseum
}

const mapStateToProps = ({ selectedMuseum }) => ({ selectedMuseum })

export default connect(
  mapStateToProps,
  actualActions
)(MuseumPicker)

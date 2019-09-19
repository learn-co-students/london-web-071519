import React from 'react'

import { getHogImagePath } from './helpers'

class Hog extends React.Component {
  state = {
    showDetails: false
  }

  toggleShowDetails = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render () {
    const { hog } = this.props
    const { showDetails } = this.state
    const { toggleShowDetails } = this
    return (
      <div onClick={toggleShowDetails}>
        <h2>
          {hog.name} {hog.greased && '💦'}
        </h2>
        <img src={getHogImagePath(hog.name)} />
        <p />
        {showDetails && <h3>Some more stuff</h3>}
      </div>
    )
  }
}

export default Hog

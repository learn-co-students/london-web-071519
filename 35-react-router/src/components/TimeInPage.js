import React from 'react'

class TimeInPage extends React.Component {
  state = {
    seconds: 0
  }

  handle = null

  increaseSeconds = () => {
    this.setState({ seconds: this.state.seconds + 1 })
  }

  startTimer = () => {
    this.handle = setInterval(this.increaseSeconds, 1000)
  }

  stopTimer = () => {
    clearInterval(this.handle)
    this.handle = null
  }

  componentDidMount () {
    this.startTimer()
  }

  componentWillUnmount () {
    this.stopTimer()
  }

  render () {
    return <h2>You've been on this page for {this.state.seconds} seconds</h2>
  }
}

export default TimeInPage

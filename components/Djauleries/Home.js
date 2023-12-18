import React, { Component } from 'react'
class home extends Component {
  render() {
    let toggleTag = this.toggleTag
    const {
    } = this.props.state

    return (
      <div>
        <style jsx>
          {`
          .newGame {
          }
          `}
        </style>
        <div className="newGame"><button>WIP</button></div>
        <div className="gameDisplay">
        </div>
      </div>
    )
  }

  toggleTag = () => {
    let st = this.props.state
    this.props.updateState(st)
  }
}

export default home

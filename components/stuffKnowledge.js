import React, { Component } from 'react'
class stuffKnowledge extends Component {
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
        <div className="newGame"><button>New thing</button></div>
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

export default stuffKnowledge

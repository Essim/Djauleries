import React, { Component } from "react";
class home extends Component {
  render() {
    let toggleTag = this.toggleTag;
    // const {
    // } = this.props.state

    return (
      <div>
        <style jsx>
          {`
            div {
              display: flex;
            }
            .titleArea {
            }
            .menuItem {
              padding: 2rem;
              font-size: 1rem;
              width: auto;
              height: 2rem;
            }
            .menuArea {
              flex-direction: column;
            }
            .mainTitle {
            }
            .secondaryTitle {
            }
            .subMenusArea {
              flex-direction: row;
            }
            .tertiaryTitle {
            }
            .aboutContent {
            }
          `}
        </style>
        <div className="menuArea">
          <div className="titleArea">
            <div className="mainTitle menuItem">Djauleries</div>
          </div>
          <div className="editionsArea">
            <div className="secondaryTitle menuItem">Edition 2024</div>
          </div>
          <div className="subMenusArea">
          <div className="tertiaryTitle menuItem">Règles</div>
          <div className="tertiaryTitle menuItem">Inscriptions</div>
          <div className="tertiaryTitle menuItem">Matchs</div>
          </div>
        </div>
        <div className="aboutContent"></div>
      </div>
    );
  }

  toggleTag = () => {
    let st = this.props.state;
    this.props.updateState(st);
  };
}

export default home;

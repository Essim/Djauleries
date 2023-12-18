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
            .menuArea {
            }
            .mainTitle {
            }
            .secondaryTitle {
            }
            .subMenusArea {
              flex-direction: row;;
            }
            .tertiaryTitle {
            }
            .aboutContent {
            }
          `}
        </style>
        <div className="menuArea">
          <div className="titleArea">
            <div className="mainTitle">Djauleries</div>
          </div>
          <div className="editionsArea">
            <div className="secondaryTitle">Edition 2024</div>
          </div>
          <div className="subMenusArea">
          <div className="tertiaryTitle">Règles</div>
          <div className="tertiaryTitle">Inscriptions</div>
          <div className="tertiaryTitle">Matchs</div>
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

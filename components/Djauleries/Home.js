import React, { Component } from "react";
class home extends Component {
  render() {
    let toggleTag = this.toggleTag;
    // const {
    // } = this.props.state

    return (
      <div className="pageBG">
        <style jsx>
          {`
            .pageBG {
              background-color: #0e273d;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-size: 40rem;
              background-image: url(https://imgur.com/hgc2ubE.png);
            }
            div {
              display: flex;
            }
            .titleArea {
            }
            .menuItem {
              padding: 1rem;
              font-size: 2rem;
              height: 2rem;
              color: #d0d0d0;
              font-weight: 600;
              border: solid 2px #000000a3;
              border-top: none;
              width: 100%;
              background-color: #00000080;
            }
            .menuItem:hover {
              color: white;
              font-weight: 700;
              border: solid 2px #4c4d5780;
              background-color: #4c4d5750;
            }
            .menuItem:selected {
              color: white;
              font-weight: 700;
              border: solid 2px #4c4d57a3;
              background-color: #4c4d5780;
            }
            .menuText {
              margin-left: auto;
              margin-right: auto;
            }
            .menuArea {
              flex-direction: column;
              width: 100%;
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
            <div className="mainTitle menuItem">
              <div className="menuText">Djauleries</div>
            </div>
          </div>
          <div className="editionsArea">
            <div className="secondaryTitle menuItem">
              <div className="menuText">Edition 2024</div>
            </div>
          </div>
          <div className="subMenusArea">
            <div className="tertiaryTitle menuItem">
              <div className="menuText">Règles</div>
            </div>
            <div className="tertiaryTitle menuItem">
              <div className="menuText">Inscriptions</div>
            </div>
            <div className="tertiaryTitle menuItem">
              <div className="menuText">Matchs</div>
            </div>
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

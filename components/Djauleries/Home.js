import React, { Component } from "react";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "https://djauleries.caprover-root.fol-stories.com",
      currentPage: "rules",
    };
  }

  render() {
    let switchMenu = this.switchMenu;
    const { currentPage } = this.state;

    return (
      <div className="pageBG">
        <style jsx>
          {`
            a {
              display: inline-block;
              text-decoration: none;
              font-family: monospace;
              font-weight: bolder;
              color: white;
            }
            div {
              display: flex;
              color: white;
            }
            .pageBG {
              background-color: #0e273d;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-size: 40rem;
              font-family: fantasy;
              flex-direction: column;
              background-image: url(https://imgur.com/hgc2ubE.png);
            }
            .logo {
              background-image: url(https://imgur.com/lQpP8Ww.png);
              position: absolute;
              left: 1rem;
              width: 6rem;
              height: 6rem;
              top: 1rem;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .titleArea {
              font-size: 3rem !important;
            }
            .mainTitle {
              padding-top: 2rem;
              padding-bottom: 3rem;
              font-size: 3rem;
              height: 2rem;
              color: #d0d0d0;
              font-weight: 600;
              border: solid 2px #000000a3;
              border-top: none;
              width: 100%;
              background-color: #00000080;
            }
            .titleText {
              margin-left: auto;
              margin-right: auto;
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
            .secondaryTitle {
            }
            .subMenusArea {
              flex-direction: row;
            }
            .subTitle {
              text-decoration: underline;
              margin-left: auto;
              margin-right: auto;
              margin-top: 3rem;
              font-size: 2rem;
            }
            .rulesContent {
              flex-direction: column;
            }
            .textBlock {
              margin-top: 1rem;
              font-size: 1rem;
              margin-left: 20%;
              margin-right: 20%;
              display: inline-block;
            }
          `}
        </style>
        <div className="logo"></div>
        <div className="menuArea">
          <div className="titleArea">
            <div className="mainTitle">
              <div className="titleText">Djauleries</div>
            </div>
          </div>
          <div className="editionsArea">
            <div className="secondaryTitle menuItem">
              <div className="menuText">Janvier 2024</div>
            </div>
            <div className="secondaryTitle menuItem">
              <div className="menuText">Février 2024</div>
            </div>
          </div>
          <div className="subMenusArea">
            <div className="menuItem">
              <div className="menuText" onClick={() => switchMenu("rules")}>
                Règles
              </div>
            </div>
            <div className="menuItem">
              <div
                className="menuText"
                onClick={() => switchMenu("subscription")}
              >
                Inscriptions
              </div>
            </div>
            <div className="menuItem">
              <div className="menuText" onClick={() => switchMenu("matchs")}>
                Matchs
              </div>
            </div>
          </div>
        </div>
        {currentPage == "rules" && (
          <div className="rulesContent">
            <div className="subTitle">Règles</div>
            <div className="textBlock">
              Bienvenue dans cette première{" "}
              <a
                href="https://forums.jeuxonline.info/sujet/1333946/djauleries-tournoi-mensuel"
                target="_blank"
              >
                {"(?)"}
              </a>{" "}
              édition des Djauleries !
            </div>

            <div className="textBlock">
              Les Djauleries sont un tournoi mensuel se déroulant sur le
              tournoi, en association avec le{" "}
              <a href="https://ktarena.com/" target="_blank">
                KTA
              </a>
              . C'est l'occasion pour tout le monde de s'amuser et s'entraîner,
              avec des horaires flexibles et des règles originales.
            </div>
          </div>
        )}
        {currentPage == "subscription" && (
          <div className="subscriptionContent">
            <div className="subTitle">Inscriptions</div>
          </div>
        )}
        {currentPage == "matchs" && (
          <div className="matchsContent">
            <div className="subTitle">Matchs</div>
          </div>
        )}
      </div>
    );
  }
  updateState = (newState) => {
    this.setState(newState);
  };

  switchMenu = (menu) => {
    this.updateState({
      currentPage: menu,
    });
  };
}

export default home;

import React, { Component } from "react";
import RulesEditionJanvier2024 from "./Editions/Janvier2024/RulesEditionJanvier2024";
import RulesEditionFevrier2024 from "./Editions/Fevrier2024/RulesEditionFevrier2024";
import InscriptionsEditionJanvier2024 from "./Editions/Janvier2024/InscriptionsEditionJanvier2024";
import InscriptionsEditionFevrier2024 from "./Editions/Fevrier2024/InscriptionsEditionFevrier2024";
import MatchsEditionJanvier2024 from "./Editions/Janvier2024/MatchsEditionJanvier2024";
import MatchsEditionFevrier2024 from "./Editions/Fevrier2024/MatchsEditionFevrier2024";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "https://djauleries.caprover-root.fol-stories.com",
      currentPage: "rules",
      currentEdition: "Janvier2024",
    };
  }

  render() {
    let switchMenu = this.switchMenu;
    let switchEdition = this.switchEdition;
    const { currentPage, currentEdition } = this.state;

    return (
      <div className="fullPageContent">
        <style jsx>
          {`
            body {
              background-color: black;
            }
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
            .PageBGFilter {
              background-color: #00000030;
              position: fixed;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: -1;
            }
            .pageBG {
              position: fixed;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-image: url(https://imgur.com/hgc2ubE.png);
              z-index: -2;
            }
            .fullPageContent {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-size: 40rem;
              font-family: fantasy;
              flex-direction: column;
            }
            .logo {
              background-image: url(https://imgur.com/lQpP8Ww.png);
              position: fixed;
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
              min-width: 13rem;
              color: #d0d0d0;
              font-weight: 600;
              border: solid 2px #000000a3;
              border-top: none;
              width: 100%;
              background-color: #00000080;
              box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px 5px;
            }
            .menuItem:hover {
              color: white;
              font-weight: 700;
              border: solid 2px #4c4d5780;
              background-color: #4c4d5780;
              cursor: pointer;
              z-index: 2;
              box-shadow: rgba(255, 255, 255, 0.8) 0px 0px 10px 5px;
            }
            .menuItemSelected {
              color: white;
              font-weight: 700;
              border: solid 2px #4c4d57a3;
              background-color: #4c4d5750;
              z-index: 1;
              box-shadow: rgba(255, 255, 255, 0.7) 0px 0px 10px;
            }
            .menuText {
              margin-left: auto;
              margin-right: auto;
            }
            .inactiveMenuText {
              color: #808080;
            }
            .menuArea {
              flex-direction: column;
              width: 100%;
            }
            .secondaryTitle {
            }
            .inactiveSecondaryTitle {   
              padding: 1rem;
              height: 2rem;
              color: #d0d0d0;
              font-weight: 600;
              border: solid 2px #000000a3;
              border-top: none;
              box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px 5px;
              width: 5rem;
              background-color: #303030a0;
              font-size: 1.5rem;
            }
            .subMenusArea {
              flex-direction: row;
            }
          `}
        </style>
        <div className="logo"></div>
        <div className="pageBG"></div>
        <div className="pageBGFilter"></div>
        <div className="menuArea">
          <div className="titleArea">
            <div className="mainTitle">
              <div className="titleText">Djauleries</div>
            </div>
          </div>
          <div className="editionsArea">
            <div
              className={
                "secondaryTitle menuItem " +
                (currentEdition == "Janvier2024" ? "menuItemSelected" : "")
              }
              onClick={() => switchEdition("Janvier2024")}
            >
              <div className="menuText">Janvier 2024</div>
            </div>
            <div
              className={
                "secondaryTitle menuItem " +
                (currentEdition == "Fevrier2024" ? "menuItemSelected" : "")
              }
              onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText">Février 2024</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Mars</div>
            </div>
            {/* <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Avril</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Mai</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Juin</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Juil</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Août</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Sept</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Oct</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Nov</div>
            </div>
            <div
              className={
                "inactiveSecondaryTitle " +
                (currentEdition == "Mars2024" ? "menuItemSelected" : "")
              }
             // onClick={() => switchEdition("Fevrier2024")}
            >
              <div className="menuText inactiveMenuText">Dec</div>
            </div> */}
          </div>
          <div className="subMenusArea">
            <div
              className={
                "menuItem " +
                (currentPage == "rules" ? "menuItemSelected" : "")
              }
              onClick={() => switchMenu("rules")}
            >
              <div className="menuText">Règles</div>
            </div>
            <div
              className={
                "menuItem " +
                (currentPage == "subscription" ? "menuItemSelected" : "")
              }
              onClick={() => switchMenu("subscription")}
            >
              <div className="menuText">Inscriptions</div>
            </div>
            <div
              className={
                "menuItem " +
                (currentPage == "matchs" ? "menuItemSelected" : "")
              }
              onClick={() => switchMenu("matchs")}
            >
              <div className="menuText">Matchs</div>
            </div>
          </div>
        </div>
        {currentPage == "rules" && currentEdition == "Janvier2024" && (
          <RulesEditionJanvier2024
            updateState={this.updateState}
            state={this.state}
          />
        )}
        {currentPage == "rules" && currentEdition == "Fevrier2024" && (
          <RulesEditionFevrier2024
            updateState={this.updateState}
            state={this.state}
          />
        )}
        {currentPage == "subscription" && currentEdition == "Janvier2024" && (
          <InscriptionsEditionJanvier2024
            updateState={this.updateState}
            state={this.state}
          />
        )}
        {currentPage == "subscription" && currentEdition == "Fevrier2024" && (
          <InscriptionsEditionFevrier2024
            updateState={this.updateState}
            state={this.state}
          />
        )}
        {currentPage == "matchs" && currentEdition == "Janvier2024" && (
          <MatchsEditionJanvier2024
            updateState={this.updateState}
            state={this.state}
          />
        )}
        {currentPage == "matchs" && currentEdition == "Fevrier2024" && (
          <MatchsEditionFevrier2024
            updateState={this.updateState}
            state={this.state}
          />
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
  switchEdition = (edition) => {
    this.updateState({
      currentEdition: edition,
    });
  };
}

export default home;

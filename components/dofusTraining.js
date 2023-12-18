import SpellKnowledge from "./spellKnowledge";
import SpellBarsKnowledge from "./spellBarsKnowledge";
import StuffKnowledge from "./stuffKnowledge";
import React, { Component } from "react";

require("isomorphic-fetch");

let initialStateFetched = false;

class DofusTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "https://dofus-training.caprover-root.fol-stories.com",
      spellListenerAdded: false,
      spellBarListenerAdded: false,
      spellBarFirstActive: true,
      spellsByClass: {},
      selectedSpellId: 0,
      spellBarGamesTimer: 0,
      spellBarGameMapping: {},
      spellBarGameIcons: [],
      spellBarGameIconsVariants: [],
      spellBarGamesSerie: [],
      displayedPageContent: 0,
      spellbarPlayer: "Shallio",
      spellbarClass: "eliotrope",
      lastSpellbarClass: "",
      possibleAreas: [
        "cell",
        "1circle",
        "2circle",
        "3circle",
        "4circle",
        "1line",
        "2line",
        "3line",
        "4line",
        "1cross",
        "2cross",
        "3cross",
        "4cross",
        "1halfcircle",
        "2halfcircle",
        "3halfcircle",
      ],
      classesNames: [
        "ecaflip",
        "eniripsa",
        "iop",
        "cra",
        "feca",
        "sacrieur",
        "sadida",
        "osamodas",
        "enutrof",
        "sram",
        "xelor",
        "pandawa",
        "roublard",
        "zobal",
        "steamer",
        "eliotrope",
        "huppermage",
        "ouginak",
        "forgelance",
      ],
      guessSpellSerie: [],
      currentPositionInSpellSerie: 0,
      currentSpellAnswer: {},
      spellIcon: "",
      currentSpellGameScore: 10,
    };
  }

  render() {
    let switchMenu = this.switchMenu;
    let getInitialState = () => {
      return fetch(this.state.host + "/api/train", { method: "GET" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        })
        .then((responseJson) => {
          initialStateFetched = true;
          this.updateState({
            spellsByClass: responseJson,
          });
        });
    };
    if (!initialStateFetched) {
      getInitialState();
    }

    const { displayedPageContent } = this.state;
    return (
      <div className="Sei">
        <style jsx>
          {`
            .Sei {
              display: flex;
              flex-direction: column;
            }
            .SpellBarsKnowledge {
              margin-left: auto;
              margin-right: auto;
              margin-top: 10em;
              display: flex;
              max-width: 75%;
            }
            .SpellKnowledge {
              margin-left: auto;
              margin-right: auto;
              margin-top: 10em;
              display: flex;
              max-width: 50%;
            }
            .StuffKnowledge {
              margin-left: auto;
              margin-right: auto;
              margin-top: 10em;
              display: flex;
            }
            .ComposKnowledge {
              margin-left: auto;
              margin-right: auto;
              margin-top: 10em;
              display: flex;
            }
            .DraftsKnowledge {
              margin-left: auto;
              margin-right: auto;
              margin-top: 10em;
              display: flex;
            }
            .active {
              background-color: #c8c6f5;
            }
            .inactive {
              background-color: #ebeaff;
            }
            .topMenu {
              display: flex;
              margin-left: auto;
              margin-right: auto;
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              background-color: #ebeaff;
            }
            .menuButton {
              padding: 40px;
              font-size: xxx-large;
              font-family: monospace;
              border: none;
            }
            .menuButton:hover {
              background-color: #c8c6f4;
            }
            .hidden {
              display: none;
            }
          `}
        </style>
        {/* Do top menu */}
        <div className="topMenu">
          <button onClick={() => switchMenu(1)} className={"menuButton " + (displayedPageContent == 1 ? "active" : "inactive")}>
            Spells
          </button>
          <button onClick={() => switchMenu(2)} className={"menuButton " + (displayedPageContent == 2 ? "active" : "inactive")}>
            SpellBar
          </button>
          <button onClick={() => switchMenu(3)} className={"menuButton " + (displayedPageContent == 3 ? "active" : "inactive")}>
            Stuffs
          </button>
          <button onClick={() => switchMenu(4)} className={"menuButton " + (displayedPageContent == 4 ? "active" : "inactive")}>
            Compos
          </button>
          <button onClick={() => switchMenu(5)} className={"menuButton " + (displayedPageContent == 5 ? "active" : "inactive")}>
            Drafts
          </button>
          <button onClick={() => switchMenu(6)} className={"menuButton " + (displayedPageContent == 6 ? "active" : "inactive")}>
            Classes
          </button>
        </div>
        {/* if cases for various page contents */}
        <div className={"SpellKnowledge " + (displayedPageContent == 1 ? "" : "hidden")}>
          <SpellKnowledge updateState={this.updateState} state={this.state} />
        </div>
        <div className={"SpellBarsKnowledge " + (displayedPageContent == 2 ? "" : "hidden")}>
          <SpellBarsKnowledge updateState={this.updateState} state={this.state} />
        </div>
        <div className={"StuffKnowledge " + (displayedPageContent == 3 ? "" : "hidden")}>
          <StuffKnowledge updateState={this.updateState} state={this.state} />
        </div>
      </div>
    );
  }

  updateState = (newState) => {
    this.setState(newState);
  };

  switchMenu = (menuNum) => {
    this.updateState({
      displayedPageContent: menuNum,
    });
  };
}

export default DofusTraining;

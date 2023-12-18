import React, { Component } from "react";
class spellBarsKnowledge extends Component {
  render() {
    let launchNewGame = this.launchNewGame;
    let setSpellbarPlayer = this.setSpellbarPlayer;
    let setSpellbarClass = this.setSpellbarClass;
    let selectCell = this.selectCell;

    // TODO : Base everything on spells icons instead of BDS screens. Map them with back object.
    // TODO Add player's target spell and cell. Allow variants.
    // TODO Display 4 bars : 2 with all normals, 2 with all variants.
    // TODO Update cursor to display selected spell.
    const { spellBarGamesSerie, spellBarGamesTimer, selectedSpellId, classesNames, spellbarClass, spellbarPlayer, spellBarGameIcons, spellBarGameIconsVariants } = this.props.state;
    let lines;
    (lines = []).length = 20;
    lines.fill(0);
    let rows;
    (rows = []).length = 15;
    rows.fill(0);
    return (
      <div className="sbK">
        <style jsx>
          {`
            .sbK {
              display: flex;
              flex-direction: column;
            }
            .gameArea {
              display: flex;
              flex-direction: column;
              margin: auto;
              margin-top: 10px;
            }
            .spellBar {
              margin: 5px;
            }
            .newGame {
              display: flex;
              flex-direction: column;
              margin: auto;
              margin-bottom: 20px;
            }
            .newGameButton {
              display: flex;
              margin: auto;
              padding: 10px;
              font-size: large;
              font-family: monospace;
              border: none;
              background-color: #ebeaff;
            }
            .newGameButton:hover {
              background-color: #c8c6f4;
            }
            .playerSelectionArea {
              display: flex;
              margin: auto;
              margin-bottom: 10px;
            }
            .playerChoiceButton {
              font-weight: 500;
              background-color: #ebeaff;
              border-radius: 5px;
              padding-top: 5px;
              padding-bottom: 5px;
              padding-left: 10px;
              padding-right: 10px;
              margin: 3px;
            }
            .playerChoiceButton:hover {
              background-color: #c8c6f4;
            }
            .classSelectionArea {
              display: flex;
              margin: auto;
              flex-wrap: wrap;
              margin-bottom: 10px;
            }
            .classChoiceButton {
              font-weight: 500;
              background-color: #ebeaff;
              border-radius: 5px;
              padding-left: 10px;
              padding-right: 10px;
              margin: 3px;
              max-width: 75%;
            }
            .classChoiceButton:hover {
              background-color: #c8c6f4;
            }
            .boardArea {
              display: flex;
              margin: auto;
            }
            .line {
              display: flex;
              flex-direction: column;
            }
            .cell {
              display: flex;
              border: solid 1px grey;
              padding: 18px;
              background-color: lightgrey;
            }
            .cell:hover {
              background-color: darkgrey;
            }
            .targetCell {
              background-color: lightgreen;
            }
            .spellbarDownLine {
              margin-top: -5px;
              margin-bottom: 5px;
            }
            .spellbarUpLine {
              margin-top: 5px;
            }
          `}
        </style>
        <div className="newGame">
          <div className="playerSelectionArea">
            <div className="playerChoiceButton" onClick={() => setSpellbarPlayer("Shallio")}>
              Shallio
            </div>
            <div className="playerChoiceButton" onClick={() => setSpellbarPlayer("Swipy")}>
              Swipy
            </div>
          </div>
          <div className="classSelectionArea">
            {classesNames.map((x) => (
              <div id={x} className="classChoiceButton" onClick={() => setSpellbarClass(x)}>
                {x}
              </div>
            ))}
          </div>
          <button className="newGameButton" onClick={() => launchNewGame()}>
            New game as {spellbarPlayer} playing {spellbarClass}
          </button>

          <div className="gameArea">
            <div className="boardArea">
              {lines.map((x, xIdx) => (
                <div id={"line_" + xIdx} className="line">
                  {rows.map((y, yIdx) => (
                    <div onClick={() => selectCell(xIdx, yIdx)} id={"cell_" + xIdx + "_" + yIdx} className="cell"></div>
                  ))}
                </div>
              ))}
            </div>
            <hr />
            <div className="spellbarUpLine">
              {spellBarGameIcons.map((x, idx) => idx < 10 && <img id={"line1_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <div className="spellbarDownLine">
              {spellBarGameIcons.map((x, idx) => idx >= 10 && idx < 20 && <img id={"line2_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <div className="spellbarUpLine">
              {spellBarGameIcons.map((x, idx) => idx >= 20 && idx < 30 && <img id={"line3_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <div className="spellbarDownLine">
              {spellBarGameIcons.map((x, idx) => idx >= 30 && idx < 40 && <img id={"line4_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <hr />
            <div className="spellbarUpLine">
              {spellBarGameIconsVariants.map((x, idx) => idx < 10 && <img id={"line5_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <div className="spellbarDownLine">
              {spellBarGameIconsVariants.map((x, idx) => idx >= 10 && idx < 20 && <img id={"line6_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <div className="spellbarUpLine">
              {spellBarGameIconsVariants.map((x, idx) => idx >= 20 && idx < 30 && <img id={"lin7_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
            <div className="spellbarDownLine">
              {spellBarGameIconsVariants.map((x, idx) => idx >= 30 && idx < 40 && <img id={"line8_" + idx} className="spellBarCell" src={x} width="64" height="64" />)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  launchNewGame = () => {
    let st = this.props.state;
    // Trigger timer for each chain, cumulative timer at end of serie = score
    st.spellBarGamesSerie = [];
    for (let i = 0; i < 5; i++) {
      st.spellBarGamesSerie.push(Math.ceil(Math.random() * 22));
    }

    if (!st.spellBarListenerAdded) {
      st.spellBarListenerAdded = true;
      // cursor: url(data:image/png;base64,...), auto; -> setStyle of cells to the selected spell icon ?
      document.addEventListener("keydown", (event) => {
        let cells = document.getElementsByClassName("cell");
        let selectedId = 0;
        switch (event.key) {
          case "&":
            selectedId = 0;
            break;
          case "é":
            selectedId = 1;
            break;
          case '"':
            selectedId = 2;
            break;
          case "'":
            selectedId = 3;
            break;
          case "(":
            selectedId = 4;
            break;
          case "§":
            selectedId = 5;
            break;
          case "è":
            selectedId = 6;
            break;
          case "!":
            selectedId = 7;
            break;
          case "ç":
            selectedId = 8;
            break;
          case "à":
            selectedId = 9;
            break;
          case "a":
            selectedId = 10;
            break;
          case "z":
            selectedId = 11;
            break;
          case "e":
            selectedId = 12;
            break;
          case "r":
            selectedId = 13;
            break;
          case "t":
            selectedId = 14;
            break;
          case "y":
            selectedId = 15;
            break;
          case "u":
            selectedId = 16;
            break;
          case "i":
            selectedId = 17;
            break;
          case "o":
            selectedId = 18;
            break;
          case "p":
            selectedId = 19;
            break;
          case "ctrl":
          // check is & or é are pressed to toggle spellBarFirstActive
          default:
        }
        for (let i = 0; i < cells.length; i++) {
          cells[i].style["cursor"] = "url(" + st.spellBarGameIcons[selectedId] + "), pointer";
        }
        console.log(st.spellBarGameMapping);
        console.log(st.spellbarPlayer);
        console.log(st.spellbarClass);
        if (selectedId < 10) {
          st.selectedSpellId = st.spellBarGameMapping[st.spellbarPlayer.toLowerCase()][st.spellbarClass]["line1"][selectedId];
        } else if (selectedId > 9 && selectedId < 20) {
          st.selectedSpellId = st.spellBarGameMapping[st.spellbarPlayer.toLowerCase()][st.spellbarClass]["line2"][selectedId - 10];
        } else if (selectedId > 19 && selectedId < 30) {
          st.selectedSpellId = st.spellBarGameMapping[st.spellbarPlayer.toLowerCase()][st.spellbarClass]["line2"][selectedId - 20];
        } else if (selectedId > 29 && selectedId < 40) {
          st.selectedSpellId = st.spellBarGameMapping[st.spellbarPlayer.toLowerCase()][st.spellbarClass]["line2"][selectedId - 30];
        }
      });
    }
    if (st.lastSpellbarClass != st.spellbarClass) {
      this.fetchSpellbarImg();
    }
    st.lastSpellbarClass = st.spellbarClass;
    this.props.updateState(st);
  };

  setSpellbarClass = (cl) => {
    console.log("in ssC");
    let st = this.props.state;
    st.spellbarClass = cl;
    this.props.updateState(st);
  };
  setSpellbarPlayer = (pl) => {
    console.log("in ssP");
    let st = this.props.state;
    st.spellbarPlayer = pl;
    this.props.updateState(st);
  };

  selectCell = (x, y) => {
    let st = this.props.state;
    this.props.updateState(st);
  };

  fetchSpellbarImg = () => {
    let st = this.props.state;
    if (st.spellBarGameMapping.shallio == null) {
      fetch(st.host + "/api/train/bdsMap", { method: "GET" })
        .then((response) => {
          return response.json();
        })
        .then((responseJson) => {
          let st = this.props.state;
          st.spellBarGameMapping = responseJson;

          this.props.updateState(st);
        });
    }
    for (let i = 1; i < 45; i++) {
      st.spellBarGameIcons = [];
      st.spellBarGameIconsVariants = [];
      fetch(st.host + "/api/train/bdsIcon/" + st.spellbarClass + "/" + i, { method: "GET" })
        .then((response) => {
          return response.blob();
        })
        .then((responseJson) => {
          let st = this.props.state;
          let reader = new FileReader();
          reader.readAsDataURL(responseJson);
          reader.onloadend = () => {
            let base64data = reader.result;
            if (i % 2 == 1) {
              st.spellBarGameIcons.push(base64data);
            } else {
              st.spellBarGameIconsVariants.push(base64data);
            }
            this.props.updateState(st);
          };
        });
    }
  };
}

export default spellBarsKnowledge;

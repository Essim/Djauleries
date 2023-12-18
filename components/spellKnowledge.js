import React, { Component } from "react";
class spellKnowledge extends Component {
  render() {
    let launchNewSerie = this.launchNewSerie;
    let getPossiblesAlt = this.getPossiblesAlt;
    let validateSpellEntry = this.validateSpellEntry;
    let setCSAVal = this.setCSAVal;
    const { guessSpellSerie, currentPositionInSpellSerie, possibleAreas, currentSpellAnswer, spellIcon, currentSpellGameScore } = this.props.state;
    // Key processing
    return (
      <div className="sK">
        <style jsx>
          {`
            .sK {
              display: flex;
              flex-direction: column;
            }
            .newGame {
              display: flex;
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
              margin-bottom: 10px;
            }
            .newGameButton:hover {
              background-color: #c8c6f4;
            }
            .spellData {
              display: flex;
              margin: auto;
            }
            .spellIcon {
              display: flex;
              margin: auto;
            }
            .hidden {
              display: none;
            }
            .gameDisplay {
              display: flex;
              margin: auto;
            }
            .name {
              font-weight: bold;
              margin: auto;
            }
            .valid {
              border: green;
            }
            .topDescription {
              display: flex;
              flex-direction: column;
              margin-bottom: 10px;    
              padding-left: 40px;
            }
            .nextButton {
              border: none;
              border-radius: 5px;
              margin-left: 5px;
              background-color: #ebeaff;
            }
            .nextButton;hover {
              background-color: #c8c6f4;
            }
            .answerButton {
              font-weight: 500;
              border: solid 1px lightgrey;
              border-radius: 5px;
              padding-left: 5px;
              padding-right: 5px;
              margin: 3px;
            }
            .answerButton:hover {
              background-color: #c8c6f4;
            }
            .answerButtonArea {
              display: flex;
              margin-top: -4px;
              margin-left: 10px;
            }
            .answer {
              margin-right: 5px;
              text-decoration: underline dotted;
            }
            .good {
              color: green;
            }
            .bad {
              color: red;
            }
            .line {
              display: flex;
              font-weight: bold;
            }
            .score {
              margin: auto;
            }
          `}
        </style>
        <div className="score">Current score : {currentSpellGameScore}</div>
        <div className="newGame">
          <button className="newGameButton" onClick={() => launchNewSerie(10)}>
            New game
          </button>
        </div>
        <div className="gameDisplay">
          {guessSpellSerie &&
            guessSpellSerie.map(
              (x, index) =>
                x && (
                  <div id={"A" + index} className={"spellData" + (index == currentPositionInSpellSerie ? "" : " hidden")}>
                    <form id={"spell" + index}>
                      <div className="topDescription">
                        <img className="spellIcon" src={spellIcon} width="64" height="64" />
                        <div className="name">{x.name}</div>
                        <div className="description">{x.description}</div>
                      </div>
                      <div className="spellDataToComplete">
                        {/* <div className="alt">
                          Alt :
                          <select className="altSelect" name="alt" id="alt">
                            {getPossiblesAlt(x.id).map((x) => (
                              <option id={x} className="altOption" value={x}>
                                <img className="spellIcon" src={"/spellIcons/" + x + ".png"} width="64" height="64" />
                              </option>
                            ))}
                          </select>
                        </div> */}
                        {/* <div className="line areaIcon">
                          Area :
                          <select className="areaSelect" name="areaIcon" id="areaIcon">
                            {possibleAreas.map((x) => (
                              <option id={x} className="areaOption" value={x}>
                                {x}
                              </option>
                            ))}
                          </select>
                        </div> */}
                        <div className="line launchDirection">
                          <div className={"answer " + (currentSpellAnswer["launchDirectionValid"] ? "good" : "bad")}>{currentSpellAnswer.launchDirection}</div> - Launch Direction
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("launchDirection", "all")}>
                              all
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("launchDirection", "line")}>
                              line
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("launchDirection", "diagonal")}>
                              diagonal
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("launchDirection", "both")}>
                              both
                            </div>
                          </div>
                        </div>
                        <div className="line apCost">
                          <div className={"answer " + (currentSpellAnswer["apCostValid"] ? "good" : "bad")}>{currentSpellAnswer.apCost}</div> - AP Cost
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 1)}>
                              1
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 2)}>
                              2
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 3)}>
                              3
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 4)}>
                              4
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 5)}>
                              5
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 6)}>
                              6
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 7)}>
                              7
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 8)}>
                              8
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 9)}>
                              9
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("apCost", 10)}>
                              10
                            </div>
                          </div>
                        </div>
                        <div className="line cooldown">
                          <div className={"answer " + (currentSpellAnswer["cooldownValid"] ? "good" : "bad")}>{currentSpellAnswer.cooldown}</div> - Cooldown
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 0)}>
                              0
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 1)}>
                              1
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 2)}>
                              2
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 3)}>
                              3
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 4)}>
                              4
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 5)}>
                              5
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 6)}>
                              6
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 7)}>
                              7
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("cooldown", 8)}>
                              8
                            </div>
                          </div>
                        </div>
                        <div className="line minRange">
                          <div className={"answer " + (currentSpellAnswer["minRangeValid"] ? "good" : "bad")}>{currentSpellAnswer.minRange}</div> - Min range
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 0)}>
                              0
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 1)}>
                              1
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 2)}>
                              2
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 3)}>
                              3
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 4)}>
                              4
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 5)}>
                              5
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 6)}>
                              6
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 7)}>
                              7
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("minRange", 8)}>
                              8
                            </div>
                          </div>
                        </div>
                        <div className="line maxRange">
                          <div className={"answer " + (currentSpellAnswer["maxRangeValid"] ? "good" : "bad")}>{currentSpellAnswer.maxRange}</div> - Max range
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 0)}>
                              0
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 1)}>
                              1
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 2)}>
                              2
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 3)}>
                              3
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 4)}>
                              4
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 5)}>
                              5
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 6)}>
                              6
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 7)}>
                              7
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 8)}>
                              8
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 9)}>
                              9
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 10)}>
                              10
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 11)}>
                              11
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("maxRange", 12)}>
                              12
                            </div>
                          </div>
                        </div>
                        <div className="line numPerTurn">
                          <div className={"answer " + (currentSpellAnswer["numPerTurnValid"] ? "good" : "bad")}>{currentSpellAnswer.numPerTurn}</div> - Number /t
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurn", 1)}>
                              1
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurn", 2)}>
                              2
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurn", 3)}>
                              3
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurn", 4)}>
                              4
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurn", 5)}>
                              5
                            </div>
                          </div>
                        </div>
                        <div className="line numPerTurnPerPlayer">
                          <div className={"answer " + (currentSpellAnswer["numPerTurnPerPlayerValid"] ? "good" : "bad")}>{currentSpellAnswer.numPerTurnPerPlayer}</div> - Number /t
                          /p
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurnPerPlayer", 0)}>
                              0
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurnPerPlayer", 1)}>
                              1
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurnPerPlayer", 2)}>
                              2
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurnPerPlayer", 3)}>
                              3
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("numPerTurnPerPlayer", 4)}>
                              4
                            </div>
                          </div>
                        </div>
                        <div className="line baseCrit">
                          <div className={"answer " + (currentSpellAnswer["baseCritValid"] ? "good" : "bad")}>{currentSpellAnswer.baseCrit}</div> - Base crit
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("baseCrit", 0)}>
                              0
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("baseCrit", 5)}>
                              5
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("baseCrit", 10)}>
                              10
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("baseCrit", 15)}>
                              15
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("baseCrit", 20)}>
                              20
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("baseCrit", 25)}>
                              25
                            </div>
                          </div>
                        </div>
                        <div className="line lineOfSight">
                          <div className={"answer " + (currentSpellAnswer["lineOfSightValid"] ? "good" : "bad")}>{currentSpellAnswer.lineOfSight + ""}</div> - Line of sight
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("lineOfSight", true)}>
                              true
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("lineOfSight", false)}>
                              false
                            </div>
                          </div>
                        </div>
                        <div className="line modifiableRange">
                          <div className={"answer " + (currentSpellAnswer["modifiableRangeValid"] ? "good" : "bad")}>{currentSpellAnswer.modifiableRange + ""}</div> - Modifiable
                          Range
                          <div className="answerButtonArea">
                            <div className="answerButton" onClick={() => setCSAVal("modifiableRange", true)}>
                              true
                            </div>
                            <div className="answerButton" onClick={() => setCSAVal("modifiableRange", false)}>
                              false
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <button className="nextButton" onClick={() => validateSpellEntry()}>
                      {"=>"}
                    </button>
                  </div>
                )
            )}
        </div>
      </div>
    );
  }

  launchNewSerie = (serieLength = 10) => {
    let st = this.props.state;
    // Compute a new serie on spells to fill
    st.guessSpellSerie = [];
    st.currentPositionInSpellSerie = 0;
    st.currentSpellGameScore = 10;
    for (let i = 0; i < serieLength; i++) {
      let randClass = st.classesNames[Math.floor(Math.random() * 19)];
      if (st.spellsByClass[randClass]) {
        st.guessSpellSerie.push(st.spellsByClass[randClass][Math.floor(Math.random() * 44)]);
      } else {
        console.log("Not found in spellsByClass: " + randClass);
      }
    }
    if (!st.spellListenerAdded) {
      st.spellListenerAdded = true;
      document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowRight") {
          this.validateSpellEntry();
        } else if (event.key == "Enter") {
          this.validateSpellEntry();
        }
      });
    }
    this.setNewCSA();
    this.fetchSpellImg();
  };

  fetchSpellImg = () => {
    fetch(this.props.state.host + "/api/train/spellIcon/" + this.props.state.guessSpellSerie[this.props.state.currentPositionInSpellSerie].id, { method: "GET" })
      .then((response) => {
        return response.blob();
      })
      .then((responseJson) => {
        let st = this.props.state;
        let reader = new FileReader();
        reader.readAsDataURL(responseJson);
        reader.onloadend = () => {
          let base64data = reader.result;
          st.spellIcon = base64data;
          this.props.updateState(st);
        };
      });
  };

  getPossiblesAlt = (id) => {
    let baseId = Math.floor(id / 44);
    let toReturn = [];
    for (let x = 1; x < 45; x++) {
      toReturn.push(baseId + x);
    }
    return toReturn;
  };

  setCSAVal = (variable, value) => {
    let st = this.props.state;
    // TODO Check all values (get from doc with ids),
    // set color red/green
    st.currentSpellAnswer[variable] = value;
    if (st.currentPositionInSpellSerie < 10) {
      if (st.guessSpellSerie[st.currentPositionInSpellSerie][variable] == value) {
        st.currentSpellAnswer[variable + "Valid"] = true;
      } else {
        st.currentSpellAnswer[variable + "Valid"] = false;
        st.currentSpellGameScore -= 1;
      }
    }
    this.props.updateState(st);
  };

  validateSpellEntry = () => {
    let st = this.props.state;
    st.currentPositionInSpellSerie += 1;
    if (st.currentPositionInSpellSerie < 10) {
      this.setNewCSA();
      this.fetchSpellImg();
    }
  };

  setNewCSA = () => {
    let st = this.props.state;
    st.currentSpellAnswer = {
      areaIcon: "cell",
      launchDirection: "?",
      apCost: 0,
      cooldown: 0,
      minRange: "?",
      maxRange: 0,
      numPerTurn: 0,
      numPerTurnPerPlayer: 0,
      baseCrit: 0,
      lineOfSight: "?",
      modifiableRange: "?",
    };
    let previousCSA = st.currentSpellGameScore;
    this.setCSAVal("areaIcon", st.currentSpellAnswer.areaIcon);
    // this.setCSAVal("launchDirection", st.currentSpellAnswer.launchDirection);
    this.setCSAVal("apCost", st.currentSpellAnswer.apCost);
    this.setCSAVal("cooldown", st.currentSpellAnswer.cooldown);
    // this.setCSAVal("minRange", st.currentSpellAnswer.minRange);
    this.setCSAVal("maxRange", st.currentSpellAnswer.maxRange);
    this.setCSAVal("numPerTurn", st.currentSpellAnswer.numPerTurn);
    this.setCSAVal("numPerTurnPerPlayer", st.currentSpellAnswer.numPerTurnPerPlayer);
    this.setCSAVal("baseCrit", st.currentSpellAnswer.baseCrit);
    // this.setCSAVal("lineOfSight", st.currentSpellAnswer.lineOfSight);
    // this.setCSAVal("modifiableRange", st.currentSpellAnswer.modifiableRange);
    st.currentSpellGameScore = previousCSA;
  };
}

export default spellKnowledge;

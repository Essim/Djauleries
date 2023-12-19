import React, { Component } from "react";

class InscriptionsEditionJanvier2024 extends Component {
  render() {
    return (
      <div className="pageContent">
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
            .fullPageContent {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-size: 40rem;
              flex-direction: column;
              font-family: auto;
            }
            .subTitle {
              text-decoration: underline;
              margin-left: auto;
              margin-right: auto;
              margin-top: 3rem;
              font-size: 2rem;
            }
            .pageContent {
              flex-direction: column;
              height: 100%;
              font-family: auto;
            }
            .textBlock {
              margin-top: 1rem;
              font-size: 1.1rem;
              margin-left: 20%;
              margin-right: 20%;
              background-color: black;
              display: inline-block;
              box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px 10px;
            }
            .subTitleLine {
              margin-left: 20%;
              margin-right: 20%;
              display: inline-block;
              margin-top: 2rem;
              font-size: 1.5rem;
              font-weight: bolder;
              background-color: black;
              box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px 10px;
            }
          `}
        </style>
        <div className="subTitle">Inscription : Janvier 2024</div>
        <div className="textBlock">
          Ouverture des inscriptions : -31 JOURS !
        </div>
      </div>
    );
  }
}

export default InscriptionsEditionJanvier2024;

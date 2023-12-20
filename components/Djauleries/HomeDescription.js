import React, { Component } from "react";

class HomeDescription extends Component {
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
              background-size: 60vw;
              flex-direction: column;
              font-family: auto;
            }
            .subTitle {
              text-decoration: underline;
              margin-left: auto;
              margin-right: auto;
              margin-top: 4.5vw;
              font-size: 3vw;
            }
            .pageContent {
              flex-direction: column;
              height: 100%;
              font-family: auto;
            }
            .textBlock {
              margin-top: 1.5vw;
              font-size: 1.65vw;
              margin-left: 20%;
              margin-right: 20%;
              background-color: black;
              display: inline-block;
              box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px 10px;
              text-align: center;
            }
            .subTitleLine {
              margin-left: 20%;
              margin-right: 20%;
              display: inline-block;
              margin-top: 3vw;
              font-size: 2.25vw;
              font-weight: bolder;
              background-color: black;
              box-shadow: rgba(0, 0, 0, 0.8) 0px 0px 10px 10px;
            }
          `}
        </style>
        <div className="subTitle">Accueil</div>
        <div className="textBlock">Bienvenue aux Djauleries !</div>

        <div className="textBlock">
          Les Djauleries sont un tournoi mensuel, se déroulant sur le serveur
          tournoi de Dofus, en association avec le
          <a href="https://ktarena.com/" target="_blank">
            KTA
          </a>
          .
        </div>

        <div className="textBlock">
          C'est l'occasion pour tous les participants de s'amuser et
          s'entraîner, avec des horaires flexibles et des règles originales.
        </div>
        
        <div className="textBlock">
          Les Djauleries sont organisées par Shallio et Swipy, n'hésitez pas à nous contacter via Discord en cas de question.
        </div>
      </div>
    );
  }
}

export default HomeDescription;

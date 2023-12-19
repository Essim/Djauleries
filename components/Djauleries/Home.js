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
            .pageContent {
              flex-direction: column;
              background-color: #00000030;
              height: 100%;
            }
            .textBlock {
              margin-top: 1rem;
              font-size: 1rem;
              margin-left: 20%;
              margin-right: 20%;
              display: inline-block;
            }
            .subTitleLine {
              text-decoration: outline;
              padding-left: 1rem;
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
          <div className="pageContent">
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
            <div className="textBlock">
              Bienvenu(e) dans ce document de démonstration destiné à évaluer la
              mise en page et la lisibilité d'un texte de règles complet.
              Contrairement à l'habituel "Lorem Ipsum", souvent utilisé à des
              fins de remplissage, nous avons opté pour une approche plus
              contemporaine afin de rendre cette expérience plus pertinente et
              engageante.
            </div>
            <div className="textBlock">
              Dans ce contexte, nous explorerons divers aspects, éléments et
              directives qui peuvent être intégrés dans un ensemble de règles
              complet. Gardez à l'esprit que ces éléments sont purement fictifs
              et ne sont pas destinés à être appliqués dans un cadre réel.
              Cependant, ils offrent une base solide pour évaluer la manière
              dont le texte remplit l'espace et interagit visuellement avec
              d'autres éléments graphiques.
            </div>
            <div className="subTitleLine">
              Règle 1 : La clarté est primordiale
            </div>
            <div className="textBlock">
              Dans toute communication, qu'elle soit écrite ou visuelle, la
              clarté est essentielle. Assurez-vous que chaque règle est formulée
              de manière concise et compréhensible. Évitez les ambiguïtés autant
              que possible, car elles peuvent entraîner une interprétation
              erronée.
            </div>
            <div className="subTitleLine">Règle 2 : Hiérarchie visuelle</div>
            <div className="textBlock">
              Organisez votre texte de règles en utilisant une hiérarchie
              visuelle claire. Utilisez des titres, des sous-titres et des
              paragraphes pour structurer l'information de manière logique. Cela
              facilite la compréhension et la navigation à travers le document.
            </div>
            <div className="subTitleLine">
              Règle 3 : Inclusion de graphiques
            </div>
            <div className="textBlock">
              Lorsque cela est pertinent, n'hésitez pas à inclure des
              graphiques, des schémas ou des illustrations pour renforcer les
              points clés. Les éléments visuels peuvent souvent simplifier la
              compréhension d'un concept complexe.
            </div>
            <div className="subTitleLine">
              Règle 4 : Consistance stylistique
            </div>
            <div className="textBlock">
              Maintenez une cohérence stylistique tout au long du document.
              Utilisez une police de caractères lisible et choisissez des
              couleurs qui s'harmonisent. La consistance garantit une expérience
              fluide et agréable pour le lecteur.
            </div>
            <div className="subTitleLine">Règle 5 : Révision régulière</div>
            <div className="textBlock">
              Un ensemble de règles n'est jamais figé. Il est important de le
              réviser régulièrement pour refléter les changements, les mises à
              jour et les évolutions dans le domaine concerné. La flexibilité du
              texte est aussi cruciale que sa clarté initiale.
            </div>
            <div className="textBlock">
              En conclusion, utilisez ce texte de remplissage comme un outil
              pour évaluer la mise en page et l'organisation de votre propre
              document de règles. N'hésitez pas à personnaliser le contenu en
              fonction de vos besoins spécifiques et à rechercher une approche
              qui corresponde à l'identité visuelle de votre projet.
            </div>
          </div>
        )}
        {currentPage == "subscription" && (
          <div className="pageContent">
            <div className="subTitle">Inscriptions</div>
          </div>
        )}
        {currentPage == "matchs" && (
          <div className="pageContent">
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

import React, { Component } from "react";

class RulesEditionFevrier2024 extends Component {
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
        <div className="subTitle">Règles : Février 2024</div>
        <div className="textBlock">
          Bienvenue dans cette première
          <a
            href="https://forums.jeuxonline.info/sujet/1333946/djauleries-tournoi-mensuel"
            target="_blank"
          >
            {"(?)"}
          </a>
          édition des Djauleries !
        </div>

        <div className="textBlock">
          Les Djauleries sont un tournoi mensuel se déroulant sur le tournoi, en
          association avec le{" "}
          <a href="https://ktarena.com/" target="_blank">
            KTA
          </a>
          . C'est l'occasion pour tout le monde de s'amuser et s'entraîner, avec
          des horaires flexibles et des règles originales.
        </div>
        <div className="textBlock">
          Bienvenu(e) dans ce document de démonstration destiné à évaluer la
          mise en page et la lisibilité d'un texte de règles complet.
          Contrairement à l'habituel "Lorem Ipsum", souvent utilisé à des fins
          de remplissage, nous avons opté pour une approche plus contemporaine
          afin de rendre cette expérience plus pertinente et engageante.
        </div>
        <div className="textBlock">
          Dans ce contexte, nous explorerons divers aspects, éléments et
          directives qui peuvent être intégrés dans un ensemble de règles
          complet. Gardez à l'esprit que ces éléments sont purement fictifs et
          ne sont pas destinés à être appliqués dans un cadre réel. Cependant,
          ils offrent une base solide pour évaluer la manière dont le texte
          remplit l'espace et interagit visuellement avec d'autres éléments
          graphiques.
        </div>
        <div className="subTitleLine">Règle 1 : La clarté est primordiale</div>
        <div className="textBlock">
          Dans toute communication, qu'elle soit écrite ou visuelle, la clarté
          est essentielle. Assurez-vous que chaque règle est formulée de manière
          concise et compréhensible. Évitez les ambiguïtés autant que possible,
          car elles peuvent entraîner une interprétation erronée.
        </div>
        <div className="subTitleLine">Règle 2 : Hiérarchie visuelle</div>
        <div className="textBlock">
          Organisez votre texte de règles en utilisant une hiérarchie visuelle
          claire. Utilisez des titres, des sous-titres et des paragraphes pour
          structurer l'information de manière logique. Cela facilite la
          compréhension et la navigation à travers le document.
        </div>
        <div className="subTitleLine">Règle 3 : Inclusion de graphiques</div>
        <div className="textBlock">
          Lorsque cela est pertinent, n'hésitez pas à inclure des graphiques,
          des schémas ou des illustrations pour renforcer les points clés. Les
          éléments visuels peuvent souvent simplifier la compréhension d'un
          concept complexe.
        </div>
        <div className="subTitleLine">Règle 4 : Consistance stylistique</div>
        <div className="textBlock">
          Maintenez une cohérence stylistique tout au long du document. Utilisez
          une police de caractères lisible et choisissez des couleurs qui
          s'harmonisent. La consistance garantit une expérience fluide et
          agréable pour le lecteur.
        </div>
        <div className="subTitleLine">Règle 5 : Révision régulière</div>
        <div className="textBlock">
          Un ensemble de règles n'est jamais figé. Il est important de le
          réviser régulièrement pour refléter les changements, les mises à jour
          et les évolutions dans le domaine concerné. La flexibilité du texte
          est aussi cruciale que sa clarté initiale.
        </div>
        <div className="textBlock">
          En conclusion, utilisez ce texte de remplissage comme un outil pour
          évaluer la mise en page et l'organisation de votre propre document de
          règles. N'hésitez pas à personnaliser le contenu en fonction de vos
          besoins spécifiques et à rechercher une approche qui corresponde à
          l'identité visuelle de votre projet.
        </div>
      </div>
    );
  }
}

export default RulesEditionFevrier2024;

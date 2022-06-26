import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeinScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Développeur web et mobile avec une bonne connaisance du Frameworks ReactJs, ainsi qu'un talent pour créer des applications avec la plus grande efficacité.Junior passionné et déterminé désireux d'être un atout pour votre entreprise.",
    highlights: {
      bullets: [
        "Développement web et mobile",
        "Interface front-end interactive selon la conception",
        "ReactJS",
        "Redux ",
        "Styled Components",
        "Gestion de la base de données",
      ],
      heading: "Voici quelques faits saillants:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"Apropos"} subHeading={"Pourquoi me choisir ?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Contactez-moi{" "}
              </button>
              <a
                href="Lettre-de-Motivation.pdf"
                download="Lettre-de-Motivation.pdf"
              >
                <button className="btn highlighted-btn">
                  Obtenir Lettre de Motivation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

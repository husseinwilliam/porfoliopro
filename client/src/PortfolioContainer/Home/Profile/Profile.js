import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100070514025750">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.linkedin.com/in/hussein-william">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="#">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Bonjour, Je m'appelle<span className="highlighted-text"> Hussein William</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Hussein William Dev 🌐",
                    1000,
                    "Developpeur Front-end Junior 💻",
                    1000,
                    "MERN Stack Dev ✔",
                    1000,
                    "ReactJS 🚀",
                    1000,
                   
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Talent pour créer des applications avec des opérations front-end
              et back-end.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >   Contact </button>
            <a href="HusseinWilliam.pdf" download="HusseinWilliam.pdf">
              <button className="btn highlighted-btn">Obtenir CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

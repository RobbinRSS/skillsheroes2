import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/App.css";
import "../styles/home.css";
import axios from "axios";
import { Link } from "react-router-dom";

// App.jsx gaat routing regelen

function Home() {
  return (
    <>
      <h4>Welkom gebruiker naam</h4>

      <main id="content-blocks">
        <Link to={"/keuzedeel:id"} id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Keuzedeel naam</h2>
        </Link>

        <div id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Keuzedeel naam</h2>
        </div>

        <div id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Keuzedeel naam</h2>
        </div>

        <div id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Keuzedeel naam</h2>
        </div>
      </main>
    </>
  );
}

export default Home;

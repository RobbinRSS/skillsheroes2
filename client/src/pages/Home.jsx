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
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h4>Welkom RE/MAX makelaar name</h4>

      <main id="content-blocks">
        <Link to={"/databaseclients"} id="content-block">
          <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
          <h2>Database interface</h2>
        </Link>

        <div id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Unknown</h2>
        </div>

        <div id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Unknown</h2>
        </div>

        <div id="content-block">
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
          <h2>Unknown</h2>
        </div>
      </main>
    </>
  );
}

export default Home;

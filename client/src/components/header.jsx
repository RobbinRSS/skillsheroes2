import { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/header.css";
import logo from "../assets/img/logo.png";
import axios from "axios";
import PopupContent from "./popup";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  return (
    <>
      <header>
        <img src={logo} alt="Cool frog" />

        <button id="login" onClick={handleOpenPopup}>
          Log in
        </button>
      </header>

      {showPopup && <PopupContent onClose={handleClosePopup} />}
    </>
  );
}

export default Header;

import { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/header.css";
import logo from "../assets/img/logo.png";
import axios from "axios";

function PopupContent({ onClose }) {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      {/* prevents closing while inside the popup */}
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Log in</h3>
        <form>
          <input type="email" placeholder="email" required />
          <button type="submit">Inloggen</button>
        </form>
      </div>
    </>
  );
}

export default PopupContent;

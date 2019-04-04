import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand"><a href="/">Clicky Game</a></li>
        <li>{props.texttoDisplay}</li>
        <li>Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
      

  );
}

export default Navbar;



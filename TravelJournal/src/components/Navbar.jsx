import React from "react";
import world from "../images/miniWorld.png"

export default function Navbar() {
  return (
    <nav className="nav-wrap">
      <img
        src={world}
        className="nav-img"
      />
      <h1 className="nav-title">My Dream Travel Journal</h1>
    </nav>
  );
}
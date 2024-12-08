import React from "react";
import { Link } from "react-router-dom";

export default function AppNav() {
  return (
    <nav className="app-nav ">
      <ul className="nav-container ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a to="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

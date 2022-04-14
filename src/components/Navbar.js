// styles
import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="brand" to="/">
          <h1>Recipe Directory</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}

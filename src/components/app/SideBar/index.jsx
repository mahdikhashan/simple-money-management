import React from "react";

import { Link } from "react-router-dom";

import "./style.css";

function SideBar(props) {
  return (
    <sidebar>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/transaction/new">New</Link>
          </li>
        </ul>
      </nav>
    </sidebar>
  );
}

export default SideBar;

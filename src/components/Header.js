import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>
            <Link to="/">ToDo</Link>
          </h1>
        </div>
        <div id="nav-wrapper" className="nav-wrapper">
          <ul>
            <li>
              <Link to="/pending">Pending</Link>
            </li>
            <li>
              <Link to="done">Done</Link>
            </li>
            <li>
              <Link to="/add">&#43; New</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="menu">
      <nav className="navbar navigation">
        <div className="container">
          <div className="navbar-header">
            <h2 className="menu-title">Main Menu</h2>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse text-center">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <Link to="/">Home</Link>
              </li>

              <li className="dropdown">
                <Link to="/t-shirts">T-shirts</Link>
              </li>

              <li className="dropdown">
                <Link to="/trousers">Trousers</Link>
              </li>

              <li className="dropdown">
                <a href="index.html">About us</a>
              </li>

              <li className="dropdown">
                <a href="index.html">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

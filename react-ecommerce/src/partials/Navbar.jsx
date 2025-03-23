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

              <li className="dropdown dropdown-slide">
                <a
                  href="#!"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  data-hover="dropdown"
                  data-delay="350"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop <span className="tf-ion-ios-arrow-down"></span>
                </a>
                <div className="dropdown-menu">
                  <div className="row">
                    {/* Basic */}
                    <div className="col-lg-12 col-md-12 mb-sm-12">
                      <ul>
                        <li className="dropdown-header">Category</li>
                        <li role="separator" className="divider"></li>
                        <li>
                          <Link to="/category/men">Men</Link>
                        </li>
                        <li>
                          <Link to="/category/women">Women</Link>
                        </li>
                        <li>
                          <Link to="/category/kids">Kids</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="dropdown">
                <a href="index.html">Blog</a>
              </li>

              <li className="dropdown">
                <a href="index.html">Contact Us</a>
              </li>

              <li className="dropdown">
                <a href="index.html">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

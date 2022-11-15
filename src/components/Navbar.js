import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="display-flex justify-space-between align-center p-2">
        <span>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">
              Hannah Hughes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </span>
      </header>
    </div>
  );
}

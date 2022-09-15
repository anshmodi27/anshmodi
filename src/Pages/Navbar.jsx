import React, { useState } from "react";
import "../Css/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row flex-end">
            <button
              type="button"
              aria-label="menu"
              className={showMenu ? "nav-toggle active" : "nav-toggle"}
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
            </button>
            <nav className={showMenu ? "nav active " : "nav"}>
              <div className="nav-inner">
                <ul>
                  <li>
                    <a href="#Home" className="nav-item" aria-label="Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#About" className="nav-item" aria-label="About">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Contact"
                      className="nav-item"
                      aria-label="Contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

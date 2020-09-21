import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="fixed-header">
        {}
        <div className="header-flex-box">
          {}
          <a href="index.html" className="logo pointer-large animsition-link">
            <div className="logo-img-box">
              <img
                className="logo-white"
                src="assets/images/logo/logo-white.png"
                alt="logo"
              />
              <img
                className="logo-black"
                src="assets/images/logo/logo-black.png"
                alt="logo"
              />
            </div>
          </a>
          {}
          {}
          <div className="menu-open pointer-large">
            <span className="hamburger" />
          </div>
          {}
        </div>
        {}
      </header>
    );
  }
}

export default Header;

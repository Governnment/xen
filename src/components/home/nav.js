import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav-container dark-bg-1">
        {}
        <div className="nav-logo">
          <img src="assets/images/logo/logo-white.png" alt="logo" />
        </div>
        {}
        {}
        <div className="menu-close pointer-large" />
        {}
        <div className="dropdown-close-box">
          <div className="dropdown-close pointer-large">
            <span />
          </div>
        </div>
        {}
        {}
        <ul className="nav-menu dark-bg-1">
          {}
          <li className="nav-box nav-bg-change active dropdown-open">
            <a className="pointer-large nav-link">
              <span className="nav-btn active" data-text="Home">
                Home
              </span>
            </a>
            {}
            <ul className="dropdown">
              <li className="nav-box">
                <a href="index.html" className="animsition-link pointer-large">
                  <span className="nav-btn active" data-text="Slider Home">
                    Slider Home
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="video_home.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Video Bg">
                    Video Bg
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="home_fullscreen.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Fullscreen Bg">
                    Fullscreen Bg
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="home_particles.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Particles">
                    Particles
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="home_typewriter.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Typewriter">
                    Typewriter
                  </span>
                </a>
              </li>
            </ul>
            {}
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/pexels-photo-1806031.jpeg)"
              }}
            />
          </li>
          {}
          {}
          <li className="nav-box nav-bg-change">
            <a
              href="about.html"
              className="animsition-link pointer-large nav-link"
            >
              <span className="nav-btn" data-text="About">
                About
              </span>
            </a>
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/adolescent-adult-diversity-1034361.jpg)"
              }}
            />
          </li>
          {}
          {}
          <li className="nav-box nav-bg-change">
            <a
              href="services.html"
              className="animsition-link pointer-large nav-link"
            >
              <span className="nav-btn" data-text="Services">
                Services
              </span>
            </a>
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/bald-casual-facial-hair-1708528.jpg)"
              }}
            />
          </li>
          {}
          {}
          <li className="nav-box nav-bg-change dropdown-open">
            <a className="pointer-large nav-link">
              <span className="nav-btn" data-text="Portfolio">
                Portfolio
              </span>
            </a>
            {}
            <ul className="dropdown">
              <li className="nav-box">
                <a
                  href="portfolio.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Standard">
                    Standard
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="portfolio_full_screen.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="FullScreen">
                    FullScreen
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="portfolio_slider.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Slider 1">
                    Slider 1
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="portfolio_columns_slider.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Slider 2">
                    Slider 2
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="portfolio_filter.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Filter">
                    Filter
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="project.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Single project">
                    Single project
                  </span>
                </a>
              </li>
            </ul>
            {}
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/art-artistic-artsy-1988681.jpg)"
              }}
            />
          </li>
          {}
          {}
          <li className="nav-box nav-bg-change dropdown-open">
            <a className="pointer-large nav-link">
              <span className="nav-btn" data-text="Blog">
                Blog
              </span>
            </a>
            {}
            <ul className="dropdown">
              <li className="nav-box">
                <a href="blog.html" className="animsition-link pointer-large">
                  <span className="nav-btn" data-text="Blog">
                    Blog
                  </span>
                </a>
              </li>
              <li className="nav-box">
                <a
                  href="single_post.html"
                  className="animsition-link pointer-large"
                >
                  <span className="nav-btn" data-text="Single post">
                    Single post
                  </span>
                </a>
              </li>
            </ul>
            {}
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/beautiful-black-close-up-1689731.jpg)"
              }}
            />
          </li>
          {}
          {}
          <li className="nav-box nav-bg-change">
            <a
              href="contact.html"
              className="animsition-link pointer-large nav-link"
            >
              <span className="nav-btn" data-text="Contact">
                Contact
              </span>
            </a>
            <div
              className="nav-bg"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/double-exposure-2390185_1920.jpg)"
              }}
            />
          </li>
          {}
        </ul>
        {}
      </nav>
    );
  }
}

export default Nav;

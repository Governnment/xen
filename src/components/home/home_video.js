import React from "react";

class HomeVideo extends React.Component {
  render() {
    return (
      <div
        className="video-content-bg"
        style={{
          backgroundImage:
            "url(assets/images/backgrounds/business-calligraphy-chinese-lanterns-1455969.jpg)"
        }}
      >
        <div className="bg-overlay" />
        <a
          href="https://www.youtube.com/watch?v=9TGlc0Fufgk"
          className="video-play-button popup-youtube pointer-large"
        >
          <span />
        </a>
      </div>
    );
  }
}

export default HomeVideo;

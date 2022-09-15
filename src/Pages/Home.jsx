import React from "react";
import "../Css/Home.css";

const Home = () => {
  return (
    <>
      <section className="home-section align-item-center" id="Home">
        <div className="container">
          <div className="row align-item-center">
            <div className="home-text">
              <p>Hello, I'm</p>
              <h1>Ansh Móòdi</h1>
              <h2>Frontend Web Developer</h2>
              <a href="#About" className="btn">
                More About Me
              </a>
              <a href="#Contact" className="btn">
                Contact Us
              </a>
            </div>
            <div className="home-img"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

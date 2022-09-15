import React from "react";
import "../Css/About.css";
import Tabs from "../Components/Tabs";
import Resume from "../Resume/Ansh Modi.pdf";

const About = () => {
  return (
    <>
      <section className="about-section sec-padding" id="About">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>who am ï ? </h2>
            </div>
          </div>
          <div className="row">
            <div className="about-img">
              <div className="img-box">
                <picture>
                  <source
                    srcSet={require("../Images/About.webp")}
                    type="image/webp"
                  />
                  <source
                    srcSet={require("../Images/About-min.png")}
                    type="image/png"
                  />
                  <img src={require("../Images/About-min.png")} alt="About" />
                </picture>
              </div>
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                voluptatum. Debitis, vero accusantium. Voluptatem, ullam quidem
                tenetur fugiat ex atque explicabo commodi obcaecati autem,
                repellat ut, id veniam dignissimos porro!
              </p>
              <h3>skills</h3>
              <div className="skills">
                <div className="skill-item">html</div>
                <div className="skill-item">css</div>
                <div className="skill-item">bootstrap</div>
                <div className="skill-item">tailwind</div>
                <div className="skill-item">javascript</div>
                <div className="skill-item">react js</div>
                <div className="skill-item">react native</div>
                <div className="skill-item">python</div>
                <div className="skill-item">firebase</div>
              </div>
              <Tabs />
              <a href={Resume} className="btn" download="Ansh Modi" aria-label="Resume">
                Download Resume
              </a>
              <a href="#Contact" className="btn" aria-label="Contact">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

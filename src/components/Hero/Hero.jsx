import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experinces That Inspire</h2>
        <p>
          Frontend Developer | Entrepreneur | Transforming Ideas into Seamless
          and Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <img src="./assets/images/sai.jpg" alt="" height={450} width={300} />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/html5.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/react.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

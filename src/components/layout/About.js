import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import selfie from "../../styles/images/selfie.png";
import github from "../../styles/images/github-brands.svg";
import linkedin from "../../styles/images/linkedin-brands.svg";
import twitter from "../../styles/images/twitter-square-brands.svg";

const About = () => {
  const [ref, inView, entry] = useInView({
    rootMargin: "-15%",
    threshold: 0
  });

  if (inView) {
    [...entry.target.children].forEach(child => {
      child.classList.add("aboutAnim");
    });
  }
  if (!inView && entry) {
    [...entry.target.children].forEach(child => {
      child.classList.remove("aboutAnim");
    });
  }

  return (
    <div>
      <div className="social">
        <img src={github} alt="github"></img>
        <img src={linkedin} alt="linkedin"></img>
        <img src={twitter} alt="twitter"></img>
      </div>

      <div ref={ref} className="container">
        <div className="banner">
          <h1>About</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h3>
        </div>
        <div className="about">
          <h1>Ivan Rodriguez </h1>
          <h3>full-stack web dev</h3>
          <img
            src={selfie}
            alt="image"
            style={{
              width: "40vh",
              height: "60vh"
            }}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default About;

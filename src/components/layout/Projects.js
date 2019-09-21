import React from "react";
import { Link } from "react-router-dom";
import flavorshare from "../../styles/images/flavorshare.png";
import flavorshare2 from "../../styles/images/flavorshare2.png";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView, entry] = useInView({
    rootMargin: "-27%",
    threshold: 0
  });

  if (inView) {
    [...entry.target.children].forEach(child => {
      child.classList.add("projectAnim");
    });
  }
  if (!inView && entry) {
    [...entry.target.children].forEach(child => {
      child.classList.remove("projectAnim");
    });
  }
  return (
    <div ref={ref} className="container ">
      <div className="projects">
        <h1> &lt;Projects/&gt;</h1>
        <h2>flavorshare.com</h2>

        <div>
          <div className="description">
            <div>
              <h2>
                A web application to write and share food and drink recipes with
                friends.
              </h2>
              <h3>
                Flavorshare was built using the React JavaScript library for the
                front end and NodeJS/ExpressJS for the back end. The application
                is hosted on the Heroku platform while the image uplads are
                stored using AWS S3 buckets.{" "}
              </h3>{" "}
              <a href="http://www.flavorshare.com/" target="_blank">
                <button>Visit page</button>
              </a>{" "}
            </div>

            <img className="item" src={flavorshare}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

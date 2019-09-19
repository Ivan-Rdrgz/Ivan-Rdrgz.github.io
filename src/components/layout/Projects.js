import React from "react";
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
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h3>
            <img className="item" src={flavorshare}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

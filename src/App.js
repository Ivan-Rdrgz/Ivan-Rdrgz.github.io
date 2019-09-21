import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";

import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./styles/style.css";
import Footer from "./components/layout/Footer";

const App = () => {
  const [ref, inView, entry] = useInView({
    rootMargin: "-100%",
    threshold: 0
  });

  return (
    <div className="App" style={{ scrollSnapType: "x mandatory" }}>
      <Router>
        <About />
        <Projects />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

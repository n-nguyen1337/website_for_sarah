import React from "react";
import Home from "./Home";
import About from "./About";
import Poem from "./Poem";
import Footer from "../components/Footer";
import Project from "./Project";
import { Element } from "react-scroll";

function Layout() {
  return (
    <>
      <Element name="Home-section">
        <Home />
      </Element>
      <Element name="About-section">
        <About />
      </Element>
      <Element name="Project-section">
        <Project />
      </Element>
      <Element name="Poem-section">
        <Poem />
      </Element>
      <Footer />
    </>
  );
}

export default Layout;

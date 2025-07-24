import type { Component } from "solid-js";

import "./AboutMePage.scss";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";

const AboutMePage: Component = () => {
  return (
    <>
      <AboutMeSection />
      <hr class="about__line" />

    </>
  );
};

export default AboutMePage;

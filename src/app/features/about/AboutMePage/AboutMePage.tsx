import type { Component } from "solid-js";

import "./AboutMePage.scss";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import ProfileDetailsSection from "../components/ProfileDetailsSection/ProfileDeatilsSection";

const AboutMePage: Component = () => {
  return (
    <>
      <AboutMeSection />
      <hr class="about__line" />
      <ProfileDetailsSection />
    </>
  );
};

export default AboutMePage;

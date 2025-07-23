import { type Component } from "solid-js";

import "./HomePage.scss";
import IntroSection from "../components/IntroSection/IntroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import SkillSection from "../components/SkillSection/SkillSection";

const HomePage: Component = () => {
  return (
    <>
      <IntroSection />
      <hr class="home__line" />
      <InfoSection />
      <SkillSection />
    </>
  );
};

export default HomePage;

import { type Component } from "solid-js";

import "./HomePage.scss";
import IntroSection from "../componets/IntroSection/IntroSection";
import InfoSection from "../componets/InfoSection/InfoSection";
import SkillSection from "../componets/SkillSection/SkillSection";

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

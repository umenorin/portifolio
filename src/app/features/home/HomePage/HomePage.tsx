import { type Component } from "solid-js";

import "./HomePage.scss";
import IntroSection from "../componets/IntroSection/IntroSection";
import InfoSection from "../componets/InfoSection/InfoSection";

const HomePage: Component = () => {
  return (
    <>
      <IntroSection />
      <hr class="home__line" />
      <InfoSection />
    </>
  );
};

export default HomePage;

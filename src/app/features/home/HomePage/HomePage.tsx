import { useContext, type Component } from "solid-js";

import "./HomePage.scss";
import IntroSection from "../components/IntroSection/IntroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import SkillSection from "../components/SkillSection/SkillSection";
import { Title } from "@solidjs/meta";
import TitlePageTranslation from "../../TitlePageTranslation";
import {
  LanguageCode,
  LanguageContext,
} from "../../../core/context/LanguageContext";

const HomePage: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => TitlePageTranslation[language() as LanguageCode];

  return (
    <>
      <Title>{t().home}</Title>

      <IntroSection />
      <hr class="home__line" />
      <InfoSection />
      <SkillSection />
    </>
  );
};

export default HomePage;

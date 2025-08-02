import { useContext, type Component } from "solid-js";

import "./AboutMePage.scss";
import AboutMeSection from "../components/AboutMeSection/AboutMeSection";
import ProfileDetailsSection from "../components/ProfileDetailsSection/ProfileDeatilsSection";
import { Title } from "@solidjs/meta";
import TitlePageTranslation from "../../TitlePageTranslation";
import {
  LanguageCode,
  LanguageContext,
} from "../../../core/context/LanguageContext";

const AboutMePage: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => TitlePageTranslation[language() as LanguageCode];

  return (
    <>
      <Title>{t().about}</Title>

      <AboutMeSection />
      <hr class="about__line" />
      <ProfileDetailsSection />
    </>
  );
};

export default AboutMePage;

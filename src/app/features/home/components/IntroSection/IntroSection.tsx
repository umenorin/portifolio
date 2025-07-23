import { useContext, type Component } from "solid-js";

import "./IntroSectioon.scss";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";
import Section from "../../../../core/layout/Section/Section";
import gopher from "../../../../../assets/gifs/dancing-gopher.gif";
import HomePageTranslation from "../../HomePageTranslations";

const IntroSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => HomePageTranslation[language() as LanguageCode];

  return (
    <Section>
      <div class="intro-section__container">
        <div class="intro-section__container-text">
          <h1 class="intro-section__title">{t().title}</h1>
          <p class="intro-section__paragraph">{t().introParagraph1}</p>
          <p class="intro-section__paragraph">{t().introParagraph2} </p>
        </div>
        <div class="intro-section__container-gif">
          <img class="intro-section__gif" src={gopher} alt="gopher dancing" />
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;

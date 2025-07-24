import { useContext, type Component } from "solid-js";

import "./NotFound.scss";
import { useLocation } from "@solidjs/router";
import Section from "../../core/layout/Section/Section";
import NotFoundTranslation from "./NotFoundTranslation";
import {
  LanguageCode,
  LanguageContext,
} from "../../core/context/LanguageContext";

const NotFound: Component = () => {
  const actualLocation = useLocation();
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => NotFoundTranslation[language() as LanguageCode];

  return (
    <Section>
      <div class="not-found">
        <h1 class="not-found__title">{t().title}</h1>

        <h2 class="not-found__subtitle">{t().subtitle}</h2>

        <p class="not-found__paragraph">
          {t().paragraphPart1} {actualLocation.pathname} {t().paragraphPart2}
        </p>
      </div>
    </Section>
  );
};

export default NotFound;

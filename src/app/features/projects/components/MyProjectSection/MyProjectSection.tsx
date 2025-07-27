import { useContext, type Component } from "solid-js";

import "./MyProjectSection.scss";
import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";
import veronese from "../../../../../assets/images/project_section/veronese.webp";
import lelibre from "../../../../../assets/images/project_section/lelibre.webp";
import matchtrip from "../../../../../assets/images/project_section/matchtrip.webp";
import ProjectPageTranslation from "../../ProjectPageTranslation";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";

const MyProjectSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => ProjectPageTranslation[language() as LanguageCode];

  return (
    <Section>
      <div class="project-section__container">
        <div class="project-section__card">
          <BoxLayout title="Veronese Maquetes">
            <div class="project-section__image-container">
              <img src={veronese} class="project-section__image" />
              <a
                class="project-section__image-link"
                href="/projects/veronese-maquetes"
              >
                {t().seeMoreLink}
              </a>
            </div>

            <p class="project-section__paragraph">{t().veronese.description}</p>
          </BoxLayout>
        </div>

        <div class="project-section__card">
          <BoxLayout title="Le Libre">
            <div class="project-section__image-container">
              <img src={lelibre} class="project-section__image" />
              <a class="project-section__image-link" href="/projects/lelibre">
                {t().seeMoreLink}
              </a>
            </div>

            <p class="project-section__paragraph">{t().lelibre.description}</p>
          </BoxLayout>
        </div>

        <div class="project-section__card">
          <BoxLayout title="MatchTrip">
            <div class="project-section__image-container">
              <img src={matchtrip} class="project-section__image" />
              <a class="project-section__image-link" href="/projects/matchtrip">
                {t().seeMoreLink}
              </a>
            </div>

            <p class="project-section__paragraph">
              {t().matchtrip.description}
            </p>
          </BoxLayout>
        </div>
      </div>
    </Section>
  );
};

export default MyProjectSection;

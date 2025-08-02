import { useContext, type Component } from "solid-js";

import "./MyProjectSection.scss";
import Section from "../../../../core/layout/Section/Section";
import veronese from "../../../../../assets/images/project_section/veronese.webp";
import lelibre from "../../../../../assets/images/project_section/lelibre.webp";
import matchtrip from "../../../../../assets/images/project_section/matchtrip.webp";
import ProjectPageTranslation from "../../ProjectPageTranslation";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";
import ProjectBox from "./components/ProjectBox/ProjectBox";

const MyProjectSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => ProjectPageTranslation[language() as LanguageCode];

  return (
    <Section>
      <div>
        <h1 class="project-section__title">Meu Projetos</h1>

        <div class="project-section__container">
          <ProjectBox
            title="Veronese Maquetes"
            img={veronese}
            linkURI="/projects/veronese-maquetes"
            paragraph={t().veronese.description}
          />

          <ProjectBox
            title="Le Libre"
            img={lelibre}
            linkURI="/projects/lelibre"
            paragraph={t().lelibre.description}
          />

          <ProjectBox
            title="MatchTrip"
            img={matchtrip}
            linkURI="/projects/matchtrip"
            paragraph={t().matchtrip.description}
          />
        </div>
      </div>
    </Section>
  );
};

export default MyProjectSection;

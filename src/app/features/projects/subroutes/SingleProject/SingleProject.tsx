import { useContext, type Component } from "solid-js";

import "./SingleProject.scss";
import veronese from "../../../../../assets/images/project_section/veronese.webp";
import matchtrip from "../../../../../assets/images/project_section/matchtrip.webp";
import lelibre from "../../../../../assets/images/project_section/lelibre.webp";

import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";
import {
  LanguageCode,
  LanguageContext,
  SubRouteCode,
} from "../../../../core/context/LanguageContext";
import ProjectPageTranslation from "../../ProjectPageTranslation";
import { useLocation } from "@solidjs/router";

const SingleProject: Component = () => {
  const actualLocation = useLocation();
  const [language, _setLanguage] = useContext(LanguageContext);
  const veroneseURI = "veronese-maquetes";
  const matchtripURI = "matchtrip";
  const leLibreURI = "lelibre";
  let myImg;
  let t;

  if (actualLocation.pathname.includes(veroneseURI)) {
    t = () =>
      ProjectPageTranslation[language() as LanguageCode][
        "veronese" as SubRouteCode
      ];
    myImg = veronese;
  } else if (actualLocation.pathname.includes(matchtripURI)) {
    t = () =>
      ProjectPageTranslation[language() as LanguageCode][
        "matchtrip" as SubRouteCode
      ];

    myImg = matchtrip;
  } else if (actualLocation.pathname.includes(leLibreURI)) {
    t = () =>
      ProjectPageTranslation[language() as LanguageCode][
        "lelibre" as SubRouteCode
      ];

    myImg = lelibre;
  }

  return (
    <Section>
      <div class="project-section__container">
        <div class="project-section__card">
          <BoxLayout title="Veronese Maquetes">
            <div class="project-section__image-container">
              <img src={myImg} class="project-section__image" />
              <a
                class="project-section__image-link"
                href="/projects/veronese-maquetes"
              >
                Ver Mais
              </a>
            </div>

            <p class="project-section__paragraph">{t().description}</p>
          </BoxLayout>
        </div>
      </div>
    </Section>
  );
};

export default SingleProject;

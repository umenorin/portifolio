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
  let t: any;

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
      <div class="single-project__container">
        <div class="single-project__card">
          <BoxLayout title="Veronese Maquetes">
            <div class="single-project__image-container">
              <img src={myImg} class="single-project__image" />
            </div>

            <p class="single-project__paragraph">{t().description}</p>

            <div class="single-project__urls">
              {t().live_demo ? (
                <a
                  class="single-project__link"
                  href={t().live_demo}
                  target="_blank"
                >
                  Live Demo
                </a>
              ) : (
                ""
              )}

              {t().repository1 ? (
                <a
                  class="single-project__link"
                  href={t().repository1}
                  target="_blank"
                >
                  {t().repository1_description}
                </a>
              ) : (
                ""
              )}

              {t().repository2 ? (
                <a
                  class="single-project__link"
                  href={t().repository2}
                  target="_blank"
                >
                  {t().repository2_description}
                </a>
              ) : (
                ""
              )}
            </div>
          </BoxLayout>
        </div>
      </div>
    </Section>
  );
};

export default SingleProject;

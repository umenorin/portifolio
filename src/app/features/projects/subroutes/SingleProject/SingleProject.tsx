import { For, useContext, type Component } from "solid-js";

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
import ProjectPageTranslation, {
  IProjectDetails,
} from "../../ProjectPageTranslation";
import { useLocation } from "@solidjs/router";

const SingleProject: Component = () => {
  const actualLocation = useLocation();
  const [language, _setLanguage] = useContext(LanguageContext);
  const veroneseURI = "veronese-maquetes";
  const matchtripURI = "matchtrip";
  const leLibreURI = "lelibre";
  let myImg;
  const t = getProjectDetails();

  function getProjectDetails(): IProjectDetails {
    if (actualLocation.pathname.includes(veroneseURI)) {
      myImg = veronese;
      return ProjectPageTranslation[language() as LanguageCode].veronese;
    }

    if (actualLocation.pathname.includes(matchtripURI)) {
      myImg = matchtrip;
      return ProjectPageTranslation[language() as LanguageCode].matchtrip;
    }

    if (actualLocation.pathname.includes(leLibreURI)) {
      myImg = lelibre;
      return ProjectPageTranslation[language() as LanguageCode].lelibre;
    }

    return {
      description: "Project not found",
      demoUrl: undefined,
      primaryRepo: undefined,
      secondaryRepo: undefined,
    };
  }

  return (
    <Section>
      <div class="single-project__container">
        <div class="single-project__card">
          <BoxLayout title="Veronese Maquetes">
            <div class="single-project__image-container">
              <img src={myImg} class="single-project__image" />
            </div>
            <p class="single-project__paragraph">{t.description}</p>
            <div class="single-project__urls">
              <For
                each={[
                  { url: t.demoUrl, text: "Live Demo" },
                  { url: t.primaryRepo?.url, text: t.primaryRepo?.description },
                  {
                    url: t.secondaryRepo?.url,
                    text: t.secondaryRepo?.description,
                  },
                ].filter((link) => link.url)}
              >
                {(link) => (
                  <a
                    class="single-project__link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text || "View Repository"}
                  </a>
                )}
              </For>
            </div>{" "}
          </BoxLayout>
        </div>
      </div>
    </Section>
  );
};

export default SingleProject;

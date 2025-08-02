import { createMemo, For, useContext, type Component } from "solid-js";

import "./SingleProject.scss";
import veronese from "../../../../../assets/images/project_section/veronese.webp";
import matchtrip from "../../../../../assets/images/project_section/matchtrip.webp";
import lelibre from "../../../../../assets/images/project_section/lelibre.webp";

import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";
import ProjectPageTranslation, { IProjectDetails } from "../../ProjectPageTranslation";
import { useLocation } from "@solidjs/router";
import { Title } from "@solidjs/meta";

const SingleProject: Component = () => {
  const actualLocation = useLocation();
  const [language, _setLanguage] = useContext(LanguageContext);
  const veroneseURI = "veronese-maquetes";
  const matchtripURI = "matchtrip";
  const leLibreURI = "lelibre";

  const t = createMemo(() => {
    if (actualLocation.pathname.includes(veroneseURI)) {
      return {
        details: ProjectPageTranslation[language() as LanguageCode].veronese,
        img: veronese,
      };
    }

    if (actualLocation.pathname.includes(matchtripURI)) {
      return {
        details: ProjectPageTranslation[language() as LanguageCode].matchtrip,
        img: matchtrip,
      };
    }

    if (actualLocation.pathname.includes(leLibreURI)) {
      return {
        details: ProjectPageTranslation[language() as LanguageCode].lelibre,
        img: lelibre,
      };
    }

    return {
      details: {
        description: "Project not found",
        demoUrl: undefined,
        primaryRepo: undefined,
        secondaryRepo: undefined,
      },
      img: "",
    };
  });

  return (
    <Section>
      <Title>
        {language() == "pt_br" ? "Projetos" : "Projects"} - {(t().details as IProjectDetails).projectName}
      </Title>
      <div class="single-project__container">
        <div class="single-project__card">
          <BoxLayout title={(t().details as IProjectDetails).projectName}>
            <div class="single-project__image-container">
              <img src={t().img} class="single-project__image" />
            </div>
            <p class="single-project__paragraph">{t().details.description}</p>
            <div class="single-project__urls">
              <For
                each={[
                  { url: t().details.demoUrl, text: "Live Demo" },
                  {
                    url: t().details.primaryRepo?.url,
                    text: t().details.primaryRepo?.description,
                  },
                  {
                    url: t().details.secondaryRepo?.url,
                    text: t().details.secondaryRepo?.description,
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

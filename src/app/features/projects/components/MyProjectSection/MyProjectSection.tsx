import type { Component } from "solid-js";

import "./MyProjectSection.scss";
import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";
import veronese from "../../../../../assets/images/project_section/veronese.webp";
import lelibre from "../../../../../assets/images/project_section/lelibre.webp";
import matchtrip from "../../../../../assets/images/project_section/matchtrip.webp";

const MyProjectSection: Component = () => {
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
                Ver Mais
              </a>
            </div>

            <p class="project-section__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </BoxLayout>
        </div>

        <div class="project-section__card">
          <BoxLayout title="Le Libre">
            <div class="project-section__image-container">
              <img src={lelibre} class="project-section__image" />
              <a
                class="project-section__image-link"
                href="/projects/veronese-maquetes"
              >
                Ver Mais
              </a>
            </div>

            <p class="project-section__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </BoxLayout>
        </div>

        <div class="project-section__card">
          <BoxLayout title="MatchTrip">
            <div class="project-section__image-container">
              <img src={matchtrip} class="project-section__image" />
              <a
                class="project-section__image-link"
                href="/projects/veronese-maquetes"
              >
                Ver Mais
              </a>
            </div>

            <p class="project-section__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software l
              ike Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </BoxLayout>
        </div>
      </div>
    </Section>
  );
};

export default MyProjectSection;

import type { Component } from "solid-js";

import "./AboutMeSection.scss";
import Section from "../../../../core/layout/Section/Section";
import me from "../../../../../assets/images/about_section/me.webp";

const AboutMeSection: Component = () => {
  return (
    <Section>
      <div class="about-section__container">
        <div class="about-section__image">
          <img src={me} alt="minha foto" class="about-section__photo" />
        </div>

        <div class="about-section__container-info">
          <h1 class="about-section__title">Sobre Mim</h1>

          <p class="about-section__paragraph">
            Designer e desenvolvedora do Rio de Janeiro com foco em criar
            soluções digitais que unem estética, funcionalidade e tecnologia.
            Minha trajetória é dedicada a explorar a sinergia entre o design
            criativo e o desenvolvimento técnico, atuando de ponta a ponta no
            ciclo de vida de um produto. Formada em Design Digital (PUC-Rio),
            pós-graduada em UI/UX (Unyleya) e atualmente cursando Análise e
            Desenvolvimento de Sistemas (Mackenzie).
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;

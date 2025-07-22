import { useContext, type Component } from "solid-js";

import "./IntroSectioon.scss";
import { LanguageContext } from "../../../../core/context/LanguageContext";
import Section from "../../../../core/layout/Section/Section";
import gopher from "../../../../../assets/gifs/dancing-gopher.gif";
const IntroSection: Component = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <Section>
      <div class="intro-section__container">
        <div class="intro-section__container-text">
          <h1 class="intro-section__title">
            Olá, sou Ruan Costa Oliveira Desenvolvedor Full-Stack
          </h1>
          <p class="intro-section__paragraph">
            Desenvolvedor full-stack do Espírito Santo com foco em criar
            soluções tecnológicas robustas e funcionais. Minha jornada é voltada
            exclusivamente para a programação, explorando desde o front-end até
            o back-end para entregar aplicações completas e eficientes.
          </p>
          <p class="intro-section__paragraph">
            Atualmente, curso Sistemas de Informação na UVV, onde aprofundo meus
            conhecimentos em desenvolvimento de software, arquitetura de
            sistemas e boas práticas de codificação. Minha atuação envolve o
            domínio de diversas tecnologias modernas e a constante busca por
            inovação e performance.
          </p>
        </div>
        <div class="intro-section__container-gif">
          <img class="intro-section__gif" src={gopher} alt="gopher dancing" />
        </div>
      </div>
    </Section>
  );
};

export default IntroSection;

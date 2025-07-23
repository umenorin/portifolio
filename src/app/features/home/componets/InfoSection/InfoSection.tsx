import type { Component } from "solid-js";

import "./InfoSection.scss";
import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "./components/BoxLayout/BoxLayout";

const InfoSection: Component = () => {
  const formatEmail = (email: any) => {
    if (email.includes("@")) {
      return email
        .replace(/@/g, "@<wbr>")
        .replace(/_/g, "_<wbr>")
        .replace(/\./g, "<wbr>.")
        .replace(/veronese/g, "veronese<wbr>");
    }

    return email;
  };

  return (
    <Section>
      <div class="info-section__container">
        <BoxLayout title="Serviços">
          <ul>
            <li class="info-section__text">Landing pages</li>
            <li class="info-section__text">Portifólio</li>
            <li class="info-section__text">Componentização em framework</li>
            <li class="info-section__text">Manutenção de código front-end</li>
            <li class="info-section__text">Conversão de design para código</li>
          </ul>
        </BoxLayout>

        <BoxLayout title="Fale Comigo">
          <a
            href="mailto:ruan_costa_oliveira@outlook.com"
            class="info-section__text info-section__text--link "
            target="_blank"
            innerHTML={formatEmail("ruan_costa_oliveira@outlook.com")}
          ></a>
          <a
            href="https://api.whatsapp.com/send?phone=996672444"
            class="info-section__text info-section__text--link "
            target="_blank"
          >
            (27) 99667-2444
          </a>
        </BoxLayout>
      </div>
    </Section>
  );
};

export default InfoSection;

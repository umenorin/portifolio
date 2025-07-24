import { useContext, type Component } from "solid-js";

import "./InfoSection.scss";
import Section from "../../../../core/layout/Section/Section";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";
import HomePageTranslation from "../../HomePageTranslations";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";

const InfoSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => HomePageTranslation[language() as LanguageCode];

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
        <BoxLayout title={t().sectionServicesTitle}>
          <ul>
            <li class="info-section__text">{t().servicesList.value1}</li>
            <li class="info-section__text">{t().servicesList.value2}</li>
            <li class="info-section__text">{t().servicesList.value3}</li>
            <li class="info-section__text">{t().servicesList.value4}</li>
            <li class="info-section__text">{t().servicesList.value5}</li>
          </ul>
        </BoxLayout>

        <BoxLayout title={t().sectionContactTitle}>
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

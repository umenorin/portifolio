import { createMemo, createSignal, onMount, useContext, type Component } from "solid-js";

import "./AboutMeSection.scss";
import Section from "../../../../core/layout/Section/Section";
import me from "../../../../../assets/images/about_section/me.webp";
import PersonalStatus from "./components/PersonalStatus/PersonalStatus";

import { AboutMeIcons } from "./AboutMeIcons";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";
import AboutTranslation from "../../AboutTraslation";
import DownloadButton from "./components/DownloadButton/DownloadButton";

import cvPT from "../../../../../assets/downloads/curriculo.pdf";
import cvEN from "../../../../../assets/downloads/curriculo_en.pdf";

const AboutMeSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);

  const t = () => AboutTranslation[language() as LanguageCode];

  const url = createMemo(() => (language() == "pt_br" ? cvPT : cvEN));
  console.log(url())

  const [age, setAge] = createSignal(0);

  onMount(() => {
    const birthDate = new Date("2003-05-03"); // Substitua pela sua data de nascimento

    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  });

  return (
    <Section>
      <div class="about-section__container">
        <div class="about-section__image">
          <img src={me} alt="minha foto" class="about-section__photo" />
        </div>

        <div class="about-section__container-info">
          <h1 class="about-section__title">{t().title}</h1>

          <div class="about-section__image about-section__image--vertical-size ">
            <img src={me} alt="minha foto" class="about-section__photo" />
          </div>

          <div class="about-section__content">
            <p class="about-section__paragraph">{t().my_description} </p>

            <div class="about-section__container-personal">
              <PersonalStatus
                icon={AboutMeIcons.cake}
                text={`${age()} anos`}
                status=""
              />

              <PersonalStatus
                icon={AboutMeIcons.location}
                text="Guarapari / ES"
                status=""
              />

              <PersonalStatus
                icon={AboutMeIcons.dot}
                text="Disponível"
                status="active"
              />
            </div>
            <DownloadButton text={t().download} url={url()} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;

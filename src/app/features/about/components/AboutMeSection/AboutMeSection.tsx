import { useContext, type Component } from "solid-js";

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

const AboutMeSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);

  const t = () => AboutTranslation[language() as LanguageCode];

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
                text="22 anos"
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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMeSection;

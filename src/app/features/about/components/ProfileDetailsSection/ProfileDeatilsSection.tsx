import { createSignal, onMount, useContext, type Component } from "solid-js";

import "./ProfileDetailsSection.scss";
import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";

import linkedin from "../../../../../assets/images/social_media/linkedin.webp";
import github from "../../../../../assets/images/social_media/github.webp";
import AboutTranslation from "../../AboutTraslation";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../core/context/LanguageContext";
import Slider from "./components/Slider/Slider";

const ProfileDetailsSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);

  const t = () => AboutTranslation[language() as LanguageCode];

  return (
    <Section>
      <div class="profile-details-section">
        <div class="profile-details-section__container">
          <BoxLayout title={t().subtitle_social_media}>
            <ul>
              <li class="profile-details-section__item">
                <a
                  class="profile-details-section__content-item"
                  href="https://www.linkedin.com/in/ruan-costa-oliveira/"
                  target="_blank"
                >
                  <div class="profile-details-section__social-media">
                    <img
                      src={linkedin}
                      alt="likedin"
                      class="profile-details-section__image"
                    />
                  </div>

                  <span class="profile-details-section__text">linkedin</span>
                </a>
              </li>

              <li class="profile-details-section__item">
                <a
                  class="profile-details-section__content-item"
                  href="https://github.com/umenorin"
                  target="_blank"
                >
                  <div class="profile-details-section__social-media">
                    <img
                      src={github}
                      alt="github"
                      class="profile-details-section__image"
                    />
                  </div>
                  <span class="profile-details-section__text">Github</span>
                </a>
              </li>
            </ul>
          </BoxLayout>

          <BoxLayout title={t().subtitle_graduation}>
            <ul>
              <li class="profile-details-section__item  profile-details-section__text">
                Sistema de Informação - UVV (2022-2025)
              </li>
            </ul>
          </BoxLayout>
        </div>

        <Slider
          titleObs={t().obs_text}
          sliderTitles={[t().subtitle_interests, t().subtitle_Hobbies]}
          sliderDescriptions={[
            t().description_interests,
            t().description_Hobbies,
          ]}
        />
      </div>
    </Section>
  );
};

export default ProfileDetailsSection;

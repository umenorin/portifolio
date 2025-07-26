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

const ProfileDetailsSection: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);

  const t = () => AboutTranslation[language() as LanguageCode];

  const items = [1, 2];
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let trackRef: HTMLDivElement;

  const setTrackRef = (el: HTMLDivElement) => {
    trackRef = el;
  };

  onMount(() => {
    trackRef.addEventListener("scroll", () => {
      const scrollLeft = trackRef.scrollLeft;
      const width = trackRef.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    });
  });

  const goLeft = () => {
    if (!trackRef) return;
    const width = trackRef.clientWidth;
    const prev = (currentIndex() - 1 + items.length) % items.length;
    trackRef.scrollTo({ left: width * prev, behavior: "smooth" });
    setCurrentIndex(prev);
  };

  const goRight = () => {
    if (!trackRef) return;
    const width = trackRef.clientWidth;
    const next = (currentIndex() + 1) % items.length;
    trackRef.scrollTo({ left: width * next, behavior: "smooth" });
    setCurrentIndex(next);
  };

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

        <div class="profile-slider">
          <p class=" profile-slider__text profile-details-section__text">
            {t().obs_text}
          </p>

          <div class="profile-slider__controls">
            <button class="profile-slider__button left" onClick={goLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
              </svg>
            </button>

            <button class="profile-slider__button right" onClick={goRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </button>
          </div>

          <div class="profile-slider__track" ref={setTrackRef}>
            <BoxLayout title={t().subtitle_interests}>
              <p class="profile-details-section__text">
                {t().description_interests}
              </p>
            </BoxLayout>

            <BoxLayout title={t().subtitle_Hobbies}>
              <p class="profile-details-section__text">
                {t().description_Hobbies}
              </p>
            </BoxLayout>
          </div>

          <div class="profile-slider__pagination">
            {items.map((_, i) => (
              <span
                class={`profile-slider__dot ${i === currentIndex() ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfileDetailsSection;

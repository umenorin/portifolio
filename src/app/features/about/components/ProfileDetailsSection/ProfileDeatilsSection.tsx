import { createSignal, onMount, type Component } from "solid-js";

import "./ProfileDetailsSection.scss";
import Section from "../../../../core/layout/Section/Section";
import BoxLayout from "../../../../core/shared/BoxLayout/BoxLayout";

import linkedin from "../../../../../assets/images/social_media/linkedin.webp";
import github from "../../../../../assets/images/social_media/github.webp";

const ProfileDetailsSection: Component = () => {
  const items = [1, 2];
  const [currentIndex, setCurrentIndex] = createSignal(0);
  let trackRef: HTMLDivElement;
  let scrollInterval: number | undefined;

  const setTrackRef = (el: HTMLDivElement) => {
    trackRef = el;
  };

  const startAutoScroll = () => {
    scrollInterval = setInterval(() => {
      if (!trackRef) return;
      const width = trackRef.clientWidth;
      const next = (currentIndex() + 1) % items.length;
      trackRef.scrollTo({ left: width * next, behavior: "smooth" });
      setCurrentIndex(next);
    }, 10000);
  };

  onMount(() => {
    trackRef.addEventListener("scroll", () => {
      const scrollLeft = trackRef.scrollLeft;
      const width = trackRef.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    });

    startAutoScroll();

    trackRef.addEventListener("mouseenter", () => {
      clearInterval(scrollInterval);
    });

    trackRef.addEventListener("mouseleave", () => {
      startAutoScroll();
    });
  });

  setInterval(() => {
    const width = trackRef.clientWidth;
    const next = (currentIndex() + 1) % items.length;
    trackRef.scrollTo({ left: width * next, behavior: "smooth" });
    setCurrentIndex(next);
  }, 10000);

  return (
    <Section>
      <div class="profile-details-section">
        <div class="profile-details-section__container">
          <BoxLayout title="Redes Sociais">
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

          <BoxLayout title="Graduação">
            <ul>
              <li class="profile-details-section__item  profile-details-section__text">
                Sistema de Informação - UVV (2022-2025)
              </li>
            </ul>
          </BoxLayout>
        </div>

        <div class="profile-slider">
          <p class=" profile-slider__text profile-details-section__text">
            *Arraste para o lado para ver mais opções
          </p>

          <div class="profile-slider__track" ref={setTrackRef}>
            <BoxLayout title="Interesses">
              <p class="profile-details-section__text">
                Designer e desenvolvedora do Rio de Janeiro com foco em criar
                soluções digitais que unem estética, funcionalidade e
                tecnologia. Minha trajetória é dedicada a explorar a sinergia
                entre o design criativo e o desenvolvimento técnico, atuando de
                ponta a ponta no ciclo de vida de um produto. Formada em Design
                Digital (PUC-Rio), pós-graduada em UI/UX (Unyleya) e atualmente
                cursando Análise e Desenvolvimento de Sistemas (Mackenzie).
              </p>
            </BoxLayout>

            <BoxLayout title="Hobbies">
              <p class="profile-details-section__text">
                Designer e desenvolvedora do Rio de Janeiro com foco em criar
                soluções digitais que unem estética, funcionalidade e
                tecnologia. Minha trajetória é dedicada a explorar a sinergia
                entre o design criativo e o desenvolvimento técnico, atuando de
                ponta a ponta no ciclo de vida de um produto. Formada em Design
                Digital (PUC-Rio), pós-graduada em UI/UX (Unyleya) e atualmente
                cursando Análise e Desenvolvimento de Sistemas (Mackenzie).
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

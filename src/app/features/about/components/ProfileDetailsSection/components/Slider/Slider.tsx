import { createSignal, For, onMount, type Component } from "solid-js";

import "./Slider.scss";
import BoxLayout from "../../../../../../core/shared/BoxLayout/BoxLayout";

type SliderProps = {
  titleObs: string;
  sliderTitles: string[];
  sliderDescriptions: string[];
};

const Slider: Component<SliderProps> = (props) => {
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
    <>
      <div class="profile-slider">
        <p class=" profile-slider__text profile-details-section__text">
          {props.titleObs}
        </p>

        <div class="profile-slider__track" ref={setTrackRef}>
          <For each={props.sliderDescriptions}>
            {(item, index) => (
              <BoxLayout title={props.sliderTitles[index()]}>
                <p class="profile-details-section__text">{item}</p>
              </BoxLayout>
            )}
          </For>
        </div>
      </div>

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

        <div class="profile-slider__pagination">
          {items.map((_, i) => (
            <span
              class={`profile-slider__dot ${i === currentIndex() ? "active" : ""}`}
            ></span>
          ))}
        </div>

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
    </>
  );
};

export default Slider;

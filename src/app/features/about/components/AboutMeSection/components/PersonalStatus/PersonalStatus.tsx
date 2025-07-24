import { createSignal, onCleanup, onMount, type Component } from "solid-js";

import "./PersonalStatus.scss";

interface PersonalStatusProp {
  icon: string;
  text: string;
  status: string;
}

const PersonalStatus: Component<PersonalStatusProp> = (props) => {
  const [width, setWidth] = createSignal(window.innerWidth);

  const updateWidth = () => setWidth(window.innerWidth);

  onMount(() => {
    window.addEventListener("resize", updateWidth);
  });

  onCleanup(() => {
    window.removeEventListener("resize", updateWidth);
  });

  return (
    <div class="personal-status__container">
      <div class="personal-status__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={`${width() > 450 ? "24px" : "20"}`}
          viewBox="0 -960 960 960"
          width={`${width() > 450 ? "24px" : "20"}`}
          fill={props.status == "active" ? "#38c70e" : "#f2f2f2"}
        >
          <path d={props.icon} />
        </svg>
      </div>
      <p
        class={`personal-status__paragraph personal-status__paragraph--${props.status == "active" ? "active" : ""}`}
      >
        {props.text}
      </p>
    </div>
  );
};

export default PersonalStatus;

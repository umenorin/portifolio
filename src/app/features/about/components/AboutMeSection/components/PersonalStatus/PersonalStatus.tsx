import type { Component } from "solid-js";

import "./PersonalStatus.scss";

interface PersonalStatusProp {
  icon: string;
  text: string;
  status: string;
}

const PersonalStatus: Component<PersonalStatusProp> = (props) => {
  return (
    <div class="personal-status__container">
      <div class="personal-status__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
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

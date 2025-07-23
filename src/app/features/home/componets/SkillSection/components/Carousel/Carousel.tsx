import { Component } from "solid-js";
import "./Carousel.scss";

type Skill = {
  name: string;
  icon: string;
};

type FooterProps = {
  skills: Skill[];
  reverseRoll: boolean;
};

const Carousel: Component<FooterProps> = (props) => {
  return (
    <div class="carousel__container">
      <div
        class={`carousel__skills ${props.reverseRoll ? "carousel__skills--right" : ""} `}
      >
        {props.skills.map((skill) => (
          <img
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
            class="carousel__skill-icon"
          />
        ))}

        {props.skills.map((skill) => (
          <img
            src={skill.icon}
            alt={skill.name}
            title={skill.name}
            class="carousel__skill-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

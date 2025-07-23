import type { Component, JSX } from "solid-js";

import "./Section.scss";

interface SectionProps {
  children: JSX.Element;
}

const Section: Component<SectionProps> = (props: any) => {
  return <div class="section-container">{props.children}</div>;
};

export default Section;

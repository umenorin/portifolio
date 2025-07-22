import type { Component } from "solid-js";

import "./Section.scss";

const Section: Component = (props: any) => {
  return <div class="section-container">{props.children}</div>;
};

export default Section;

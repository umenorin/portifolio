import type { Component, JSX } from "solid-js";

import "./BoxLayout.scss";

interface BoxLayoutProps {
  title: string;
  children?: JSX.Element | JSX.Element[];
}

const BoxLayout: Component<BoxLayoutProps> = (props) => {
  return (
    <div class="box-layout__container">
      <h2 class="box-layout__title">{props.title}</h2>
      <div class="box-layout__children">{props.children}</div>
    </div>
  );
};

export default BoxLayout;

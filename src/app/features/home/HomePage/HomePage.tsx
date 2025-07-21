import type { Component } from "solid-js";

import "./HomePage.scss";

const HomePage: Component = () => {
  return (
    <div class={"app"}>
      <header class={"header"}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class="link"
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default HomePage;

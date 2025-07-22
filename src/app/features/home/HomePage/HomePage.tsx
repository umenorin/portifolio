import { useContext, type Component } from "solid-js";

import "./HomePage.scss";
import { LanguageContext } from "../../../core/context/LanguageContext";

const HomePage: Component = () => {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    <div class={"app"}>
      <header class={"header"}>
        {language()}
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

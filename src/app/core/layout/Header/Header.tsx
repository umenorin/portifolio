import { useContext, type Component } from "solid-js";

import "./Header.scss";
import { A } from "@solidjs/router";

import brazil from "../../../../assets/images/flags/brazil_42x39.webp";
import usa from "../../../../assets/images/flags/usa_74x39.webp";
import { LanguageCode, LanguageContext } from "../../context/LanguageContext";
import HeaderTranslation from "./HeaderTranslations";

const Header: Component = () => {
  const [language, setLanguage] = useContext(LanguageContext);

    console.log(language())

  const t = () => HeaderTranslation[language() as LanguageCode];
  console.log(t);

  const switchLanguage = () => {
    if (language() == "pt_br") {
      setLanguage("en_us");
      console.log(language());
      return;
    }

    setLanguage("pt_br");

    console.log(language());
  };

  return (
    <div class="header__container">
      <div class="header__logo">
        <a href="/" class="header__logo-link">
          Ruan.dev
        </a>
      </div>
      <div class="header__routers">
        <A
          href="/"
          class="header__router-link"
          activeClass="active"
          inactiveClass="default"
          end
        >
          {t().home}
        </A>
        <A
          href="/about"
          class="header__router-link"
          activeClass="active"
          inactiveClass="default"
          end
        >
          {t().about}
        </A>
        <A
          href="/projects"
          class="header__router-link"
          activeClass="active"
          inactiveClass="default"
          end
        >
          {t().projects}
        </A>
      </div>

      <div onclick={switchLanguage} class="header__language-container">
        <img
          class="header__language-image"
          src={language() == "pt_br" ? brazil : usa}
          alt={language() == "pt_br" ? "portugues" : "english"}
        />
      </div>
      
    </div>
  );
};

export default Header;

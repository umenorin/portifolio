import { createSignal, useContext, type Component } from "solid-js";

import "./Header.scss";
import { A } from "@solidjs/router";

import brazil from "../../../../assets/images/flags/brazil_42x39.webp";
import usa from "../../../../assets/images/flags/usa_74x39.webp";
import { LanguageCode, LanguageContext } from "../../context/LanguageContext";
import HeaderTranslation from "./HeaderTranslations";
import Logo from "./componets/Logo/Logo";
import MenuModal from "./componets/MenuModal/MenuModal";
import { MenuContext } from "../../context/MenuContext";

const Header: Component = () => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [isOpen, setIsOpen] = createSignal(false);

  const t = () => HeaderTranslation[language() as LanguageCode];

  const switchLanguage = () => {
    if (language() == "pt_br") {
      setLanguage("en_us");
      console.log(language());
      return;
    }

    setLanguage("pt_br");

    console.log(language());
  };

  const toggleMenuStatus = () => {
    setIsOpen(!isOpen());
    console.log(isOpen());
  };

  return (
    <div class="header__container">
      <div class="header__logo">
        <Logo />
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

      <div class="header__button" onclick={toggleMenuStatus}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#FFFFFF"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      <MenuContext.Provider value={[isOpen, setIsOpen]}>
        <MenuModal openModal={isOpen()} />
      </MenuContext.Provider>
    </div>
  );
};

export default Header;

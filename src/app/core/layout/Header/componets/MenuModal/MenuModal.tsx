import { useContext, type Component } from "solid-js";

import "./MenuModal.scss";
import { A } from "@solidjs/router";

import brazil from "../../../../../../assets/images/flags/brazil_42x39.webp";
import usa from "../../../../../../assets/images/flags/usa_74x39.webp";
import {
  LanguageCode,
  LanguageContext,
} from "../../../../context/LanguageContext";
import HeaderTranslation from "../../HeaderTranslations";
import Logo from "../Logo/Logo";
import { MenuContext } from "../../../../context/MenuContext";

interface MenuModalProps {
  openModal: any;
}

const MenuModal: Component<MenuModalProps> = (props) => {
  const [language, setLanguage] = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useContext(MenuContext);

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

  function CloseMenu() {
    setIsOpen(!isOpen());
  }

  if (props.openModal) {
    setIsOpen(true);
  } else {
    setIsOpen(false);
  }

  return (
    <>
      <div
        class={`menu-modal__background  ${isOpen() ? "menu-modal__background--open" : ""}`}
        onclick={CloseMenu}
      ></div>
      <div
        class={`menu-modal__container  ${isOpen() ? "menu-modal__container--open" : ""}`}
      >
        <div class="menu-modal__logo">
          <Logo />
        </div>
        <div class="menu-modal__routers">
          <A
            href="/"
            class="menu-modal__router-link"
            activeClass="active"
            inactiveClass="default"
            onclick={CloseMenu}
            end
          >
            {t().home}
          </A>
          <A
            href="/about"
            class="menu-modal__router-link"
            activeClass="active"
            inactiveClass="default"
            onclick={CloseMenu}
            end
          >
            {t().about}
          </A>
          <A
            href="/projects"
            class="menu-modal__router-link"
            activeClass="active"
            inactiveClass="default"
            onclick={CloseMenu}
            end
          >
            {t().projects}
          </A>
        </div>

        <p class="menu-modal__paragraph">{t().language}: </p>

        <div onclick={switchLanguage} class="menu-modal__language-container">
          <img
            class="menu-modal__language-image"
            src={language() == "pt_br" ? brazil : usa}
            alt={language() == "pt_br" ? "portugues" : "english"}
          />
        </div>
      </div>
    </>
  );
};

export default MenuModal;

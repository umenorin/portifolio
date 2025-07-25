import { createSignal, useContext, type Component } from "solid-js";

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
  const [isClosing, setIsClosing] = createSignal(false);

  const t = () => HeaderTranslation[language() as LanguageCode];

  const switchLanguage = () => {
    if (language() == "pt_br") {
      setLanguage("en_us");
      return;
    }

    setLanguage("pt_br");

  };

  function CloseMenu() {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  }

  if (props.openModal) {
    setIsOpen(true);
  } else {
    setIsOpen(false);
  }

  return (
    <div class="menu-modal">
      <div
        class={`menu-modal__background  ${isOpen() ? "menu-modal__background--open" : ""}`}
        onclick={CloseMenu}
      ></div>
      <div
        class={`menu-modal__container ${isOpen() ? "menu-modal__container--open" : ""} ${isClosing() ? "menu-modal__container--close" : ""}`}
      >
        <div class="menu-modal__logo" onclick={CloseMenu}>
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

        <div class="menu-modal__language-container">
          <a onclick={switchLanguage}>
            <img
              class="menu-modal__language-image"
              src={language() == "pt_br" ? brazil : usa}
              alt={language() == "pt_br" ? "portugues" : "english"}
            />
          </a>
        </div>

        <hr class="menu-modal__line" />
      </div>
    </div>
  );
};

export default MenuModal;

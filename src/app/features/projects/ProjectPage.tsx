import { useContext, type Component } from "solid-js";

import "./ProjectPage.scss";
import MyProjectSection from "./components/MyProjectSection/MyProjectSection";
import { Title } from "@solidjs/meta";
import TitlePageTranslation from "../TitlePageTranslation";
import { LanguageCode, LanguageContext } from "../../core/context/LanguageContext";

const ProjectPage: Component = () => {
  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => TitlePageTranslation[language() as LanguageCode];

  return (
    <>
      <Title>{t().projects}</Title>
      <MyProjectSection />
    </>
  );
};

export default ProjectPage;

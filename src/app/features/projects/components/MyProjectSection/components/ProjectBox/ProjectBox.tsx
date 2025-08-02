import { useContext, type Component } from "solid-js";

import "./ProjectBox.scss";
import BoxLayout from "../../../../../../core/shared/BoxLayout/BoxLayout";
import ProjectPageTranslation from "../../../../ProjectPageTranslation";
import { LanguageCode, LanguageContext } from "../../../../../../core/context/LanguageContext";

interface ProjectBoxProps {
  img: string;
  linkURI: string;
  title:string;
  paragraph: string;
}

const ProjectBox: Component<ProjectBoxProps> = (props) => {

  const [language, _setLanguage] = useContext(LanguageContext);
  const t = () => ProjectPageTranslation[language() as LanguageCode];

  return (
    <div class="project__card">
      <BoxLayout title={props.title}>
        <div class="project__image-container">
          <img src={props.img} class="project__image" />
          <a class="project__image-link" href={props.linkURI}>
            {t().seeMoreLink}
          </a>
        </div>

        <p class="project__paragraph">{props.paragraph}</p>
      </BoxLayout>
    </div>
  );
};

export default ProjectBox;

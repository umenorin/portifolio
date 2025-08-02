interface ITitleTranslation {
  home: string;
  about: string;
  projects: string;
  notFound: string;
}

interface ILocalizedTitles {
  pt_br: ITitleTranslation;
  en_us: ITitleTranslation;
}

const TitlePageTranslation: ILocalizedTitles = {
  pt_br: {
    home: "Início - Meu Portfólio",
    about: "Sobre Mim - Desenvolvedor Full-Stack",
    projects: "Meus Projetos - Portfólio",
    notFound: "Página Não Encontrada - Portfólio",
  },
  en_us: {
    home: "Home - My Portfolio",
    about: "About Me - Full-Stack Developer",
    projects: "My Projects - Portfolio",
    notFound: "Page Not Found - Portfolio",
  },
};

export default TitlePageTranslation;


export interface IProjectDetails {
  projectName: string;
  description: string;
  demoUrl?: string;
  primaryRepo?: {
    url: string;
    description?: string;
  };
  secondaryRepo?: {
    url: string;
    description?: string;
  };
}

interface IProjectCollection {
  veronese: IProjectDetails;
  lelibre: IProjectDetails;
  matchtrip: IProjectDetails;
  seeMoreLink: string;
}

interface ILocalizedProjects {
  pt_br: IProjectCollection;
  en_us: IProjectCollection;
}

const ProjectPageTranslation: ILocalizedProjects = {
  pt_br: {
    veronese: {
      projectName: "Veronese Maquetes",
      description:
        "Projeto desenvolvido para a empresa Veronese Maquetes, contemplando a renovação completa da identidade visual da marca. O front-end foi inicialmente prototipado no Figma e posteriormente desenvolvido com Angular. Já o back-end foi implementado em Go (Golang) e implantado na nuvem utilizando AWS Lambda, garantindo escalabilidade e desempenho.",
      demoUrl: "https://www.veronesemaquetes.com.br/",
    },
    lelibre: {
      projectName: "Le Libre",
      description:
        "Projeto acadêmico desenvolvido com o objetivo de demonstrar o domínio dos principais conceitos relacionados ao desenvolvimento web. A aplicação conta com um banco de dados NoSQL (MongoDB), um back-end construído em Node.js e um front-end em Angular. Durante o projeto, foram implementados sistemas de autenticação com JWT (JSON Web Token) e operações completas de CRUD, possibilitando a navegação e interação funcional dentro do sistema.",
      primaryRepo: {
        url: "https://github.com/umenorin/Projeto-Resenha",
        description: "repository",
      },
    },
    matchtrip: {
      projectName: "MatchTrip",
      description:
        "Projeto experimental voltado à criação de uma plataforma para conectar pessoas com interesses em comum que desejam realizar viagens em grupo, utilizando um sistema de match semelhante ao de aplicativos de relacionamento. Desenvolvido com React no front-end, Node.js no back-end e MongoDB como banco de dados, o projeto, apesar de estar incompleto, foi essencial para o aprofundamento em autenticação, rotas protegidas, modelagem de dados e lógica de matching.",
      primaryRepo: {
        url: "https://github.com/umenorin/matchtrip-client",
        description: "repository (client)",
      },
      secondaryRepo: {
        url: "https://github.com/umenorin/matchtrip-api",
        description: "repository (api)",
      },
    },
    seeMoreLink: "Ver Mais",
  },
  en_us: {
    veronese: {
      projectName: "Veronese Maquetes",
      description:
        "Project developed for Veronese Maquetes, including a full redesign of the brand's visual identity. The front-end was prototyped in Figma and built using Angular, while the back-end was developed in Go (Golang) and deployed on the cloud through AWS Lambda, ensuring scalability and performance.",
      demoUrl: "https://www.veronesemaquetes.com.br/",
    },
    lelibre: {
      projectName: "Le Libre",
      description:
        "Academic project developed to demonstrate understanding of core web development concepts. The application uses a NoSQL database (MongoDB), a back-end built with Node.js, and a front-end developed in Angular. Features include a login verification system using JWT (JSON Web Token) and full CRUD operations, enabling functional navigation and interaction within the platform.",
      primaryRepo: {
        url: "https://github.com/umenorin/Projeto-Resenha",
        description: "repository",
      },
    },
    matchtrip: {
      projectName: "MatchTrip",
      description:
        "Experimental project focused on building a platform to connect people with shared interests who want to travel together, using a match system similar to dating apps. Developed with React for the front-end, Node.js for the back-end, and MongoDB as the database, the project, although incomplete, was valuable for deepening skills in authentication, protected routes, data modeling, and matching logic.",
      primaryRepo: {
        url: "https://github.com/umenorin/matchtrip-client",
        description: "repository (client)",
      },
      secondaryRepo: {
        url: "https://github.com/umenorin/matchtrip-api",
        description: "repository (api)",
      },
    },
    seeMoreLink: "See More",
  },
};

export default ProjectPageTranslation;

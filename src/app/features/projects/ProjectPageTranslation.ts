export interface IProjectDetails {
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
      description: "VERONESE FUNCIONOU!!",
      demoUrl: "https://www.veronesemaquetes.com.br/",
    },
    lelibre: {
      description: "LELIBRE FUNCIONOU!!",
      primaryRepo: {
        url: "https://github.com/umenorin/Projeto-Resenha",
        description: "repository"
      }
    },
    matchtrip: {
      description: "MATCHTRIP FUNCIONOU!!",
      primaryRepo: {
        url: "https://github.com/umenorin/matchtrip-client",
        description: "repository (client)"
      },
      secondaryRepo: {
        url: "https://github.com/umenorin/matchtrip-api",
        description: "repository (api)"
      }
    },
    seeMoreLink: "Ver Mais"
  },
  en_us: {
    veronese: {
      description: "VERONESE IS WORKING!!",
      demoUrl: "https://www.veronesemaquetes.com.br/",
    },
    lelibre: {
      description: "LELIBRE IS WORKING!!",
      primaryRepo: {
        url: "https://github.com/umenorin/Projeto-Resenha",
        description: "repository"
      }
    },
    matchtrip: {
      description: "MATCHTRIP IS WORKING!!",
      primaryRepo: {
        url: "https://github.com/umenorin/matchtrip-client",
        description: "repository (client)"
      },
      secondaryRepo: {
        url: "https://github.com/umenorin/matchtrip-api",
        description: "repository (api)"
      }
    },
    seeMoreLink: "See More"
  }
};

export default ProjectPageTranslation;

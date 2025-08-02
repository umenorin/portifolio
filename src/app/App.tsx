import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import HomePage from "./features/home/HomePage/HomePage";
import { MainLayout } from "./core/layout/MainLayout/MainLayout";
import { createSignal } from "solid-js";
import { LanguageContext } from "./core/context/LanguageContext";
import AboutMePage from "./features/about/AboutMePage/AboutMePage";
import NotFound from "./features/notfound/NotFound";
import ProjectPage from "./features/projects/ProjectPage";
import SingleProject from "./features/projects/subroutes/SingleProject/SingleProject";
import { MetaProvider } from "@solidjs/meta";

const root = document.getElementById("root");

const [language, setLanguage] = createSignal("pt_br");

render(
  () => (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <MetaProvider>
        <Router root={MainLayout}>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutMePage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/projects/veronese-maquetes" component={SingleProject} />
          <Route path="/projects/lelibre" component={SingleProject} />
          <Route path="/projects/matchtrip" component={SingleProject} />
          <Route path="**" component={NotFound} />
        </Router>
      </MetaProvider>
    </LanguageContext.Provider>
  ),
  root!,
);

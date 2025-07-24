import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import HomePage from "./features/home/HomePage/HomePage";
import { MainLayout } from "./core/layout/MainLayout/MainLayout";
import { createSignal } from "solid-js";
import { LanguageContext } from "./core/context/LanguageContext";
import AboutMePage from "./features/about/AboutMePage/AboutMePage";
import NotFound from "./features/notfound/NotFound";

const root = document.getElementById("root");

const [language, setLanguage] = createSignal("pt_br");

render(
  () => (
    <LanguageContext.Provider value={[language, setLanguage]}>
      <Router root={MainLayout}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutMePage} />
        <Route path="**" component={NotFound} />
      </Router>
    </LanguageContext.Provider>
  ),
  root!,
);

import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import HomePage from "./features/home/HomePage/HomePage";
import { MainLayout } from "./core/layout/MainLayout/MainLayout";

const root = document.getElementById("root");

render(
  () => (
    <Router root={MainLayout}>
      <Route path="/" component={HomePage} />
    </Router>
  ),
  root!,
);

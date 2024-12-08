import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { HomePage } from "../pages";

const womenHomeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/women",
  component: HomePage,
});

export default womenHomeRoute;

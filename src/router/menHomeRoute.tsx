import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { HomePage } from "../pages";

const menHomeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/men",
  component: HomePage,
});

export default menHomeRoute;

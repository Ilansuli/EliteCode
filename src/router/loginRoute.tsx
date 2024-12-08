import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { LoginSignUpPage } from "../pages";

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginSignUpPage,
});

export default loginRoute;

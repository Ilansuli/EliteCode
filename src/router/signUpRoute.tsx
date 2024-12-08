import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { LoginSignUpPage } from "../pages";

const signUpRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "signup",
  component: LoginSignUpPage,
});

export default signUpRoute;

import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
// import { MyAccountPage } from "../pages";

const accountRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/my-account",
  //   component: MyAccountPage,
});

export default accountRoute;

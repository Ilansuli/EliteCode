import { Route, redirect } from "@tanstack/react-router";
import { LandingPage } from "../pages";
import rootRoute from "./rootRoute";

const landingRoute = new Route({
  getParentRoute: () => rootRoute,
  // beforeLoad: async () => {
  //   // TODO: create isUserAuth function
  //   if(isUserAuth()){
  //     throw redirect({
  //   // TODO: change to user's preferred gender
  //       to:'/men'
  //     })
  //   }
  // }
  path: "/",
  component: LandingPage,
});

export default landingRoute;

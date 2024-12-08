import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { ShoppingBagPage } from "../pages";

const shoppingBagRoute = new Route({
  getParentRoute: () => rootRoute,
  // beforeLoad: async () => {
  //   // TODO: create isUserAuth function
  //   if(!isUserAuth()){
  //     throw redirect({
  //       to:'/login'
  //     })
  //   }
  // }
  path: "/shopping-bag",
  component: ShoppingBagPage,
});

export default shoppingBagRoute;

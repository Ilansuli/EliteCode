import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { SavedProductsPage } from "../pages";
import { products } from "../data";

const savedProductsRoute = new Route({
  getParentRoute: () => rootRoute,
  // beforeLoad: async () => {
  //   // TODO: create isUserAuth function
  //   if(!isUserAuth()){
  //     throw redirect({
  //       to:'/login'
  //     })
  //   }
  // },
  loader: () => {
    return products.filter((p) => p.isSaved);
  },
  path: "/saved-products",
  component: SavedProductsPage,
});

export default savedProductsRoute;

import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
// import { MyOrdersPage } from "../pages";

const ordersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/my-orders",
  //   component: MyOrdersPage,
});

export default ordersRoute;

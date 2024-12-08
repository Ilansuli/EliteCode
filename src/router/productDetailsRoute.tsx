import { Route } from "@tanstack/react-router";
import rootRoute from "./rootRoute";
import { ProductDetailsPage } from "../pages";
import { products } from "../data";

const productDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/$productId",
  loader: ({ params: { productId } }) => {
    return products.find((p) => p._id === parseInt(productId));
  },
  component: ProductDetailsPage,
});

export default productDetailsRoute;

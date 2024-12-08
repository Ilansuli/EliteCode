import { Route } from "@tanstack/react-router";
import { ProductsPage } from "../pages";
import rootRoute from "./rootRoute";
import { products } from "../data";

const productsPageRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/$gender/$subCategory/$subCategoryId",
  loader: ({ params: { subCategoryId } }) => {
    return products.filter((p) => p.subCategoryId === parseInt(subCategoryId));
  },
  component: ProductsPage,
});

export default productsPageRoute;

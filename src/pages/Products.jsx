import React from "react";
import {
  Filters,
  ProductsContainer,
  PaginationContainer,
} from "../components/index";
import { customFetch } from "../utils";

const url = "/products";

export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;

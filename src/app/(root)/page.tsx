import React from "react";
import sampleData from "../../../public/sample-data/sample-data/db/sample-data";
import ProductList from "@/components/product/Product_list";
import { Button, ButtonGroup } from "@heroui/button";
import Banner from "@/components/home/Banner";
import Products from "../(commonLayout)/products/page";
export const metadata = {
  title: "Home",
};
const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <ProductList
        data={sampleData.products}
        title="New Arrivals"
      ></ProductList>
      <Products></Products>
    </>
  );
};

export default HomePage;

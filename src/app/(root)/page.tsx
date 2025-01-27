import React from "react";
import sampleData from "../../../public/sample-data/sample-data/db/sample-data";
import ProductList from "@/components/product/Product_list";
import { Button, ButtonGroup } from "@heroui/button";
import Banner from "@/components/home/Banner";
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
    </>
  );
};

export default HomePage;

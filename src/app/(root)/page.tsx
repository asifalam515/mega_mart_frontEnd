import React from "react";
import sampleData from "../../../public/sample-data/sample-data/db/sample-data";
import ProductList from "@/components/product/Product_list";
export const metadata = {
  title: "Home",
};
const HomePage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="New Arrivals"
      ></ProductList>
    </>
  );
};

export default HomePage;

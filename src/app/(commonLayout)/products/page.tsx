// import React from "react";
import ProductCard from "./ProductCard";
import nexiosInstance from "@/config/nexios.config";

const Products = async () => {
  const data = await fetch("http://localhost:5000/products", {
    next: {},
    cache: "no-store",
  });
  const products = await data.json();
  // const data: any = await nexiosInstance.get("/products", {
  //   cache: "no-store",
  // });
  return (
    <div>
      {/* showing products */}
      <div className="grid grid-cols-3 md:grid-cols-3 ">
        {products.map((product: any) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import ProductCard from "./ProductCard";

const Products = async () => {
  const data = await fetch("http://localhost:5000/products");
  const products = await data.json();

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

import React from "react";

const ProductDetails = async ({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: any;
}) => {
  console.log(params, searchParams);
  const productId = await (await params).productId;
  return <div></div>;
};

export default ProductDetails;

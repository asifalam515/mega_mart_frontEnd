import { Image } from "@heroui/react";
import {
  BadgeDollarSign,
  MessageCircle,
  ShoppingBasket,
  ThumbsUp,
} from "lucide-react";
const ProductDetails = async ({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string }>;
  searchParams: any;
}) => {
  const id = (await params).productId;
  const data = await fetch(`http://localhost:5000/products/${id}`);
  const product = await data.json();
  console.log(product);
  const { name, description, price, stock, category, images } = product;

  return (
    <div className="mx-auto">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div>
          <Image isZoomed alt="HeroUI Fruit Image with Zoom" src={images[0]} />
          <h2 className="mb-1 text-xl font-semibold">{name}</h2>
          <p className="text-sm dark:text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              <ThumbsUp />
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              <MessageCircle />
            </button>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <BadgeDollarSign />
              <span>{price} </span>
            </button>
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <ShoppingBasket />
              <span> {stock} </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

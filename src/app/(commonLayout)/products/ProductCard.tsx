import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const ProductCard = ({ product }) => {
  const { _id, name, description, price, stock, category, images } = product;
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={images[0]}
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold"> {name} </p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>

        <Button asChild>
          <Link className="btn btn-primary" href={`/products/${_id}`}>
            See Details
          </Link>
        </Button>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;

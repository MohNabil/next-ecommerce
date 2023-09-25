import Image from "next/image";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="flex flex-col justify-between items-center gap-6 border border-gray-200 p-6 h-full shadow-sm hover:shadow-lg">
      <div className="w-1/2 hover:scale-110 transition">
        <Image
          src={product.image}
          alt={product.description}
          width={300}
          height={300}
          className="object-cover object-center"
        />
      </div>
      <div className="">
        <p className="text-2xl font-semibold text-gray-900 text-center">
          {product.title}
        </p>
        <p className="text-xl font-semibold text-gray-900 text-center">
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;

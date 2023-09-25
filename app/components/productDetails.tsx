"use client";
import { useState } from "react";
import { Product } from "./product";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartContext } from "@/app/hooks/useCartContext";

type ProductProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductProps) => {
  const { setCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrementQuantity = () => {
    setQuantity((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleAddToCart = () => {
    setCart((prev) => {
      localStorage.setItem(
        "cart",
        JSON.stringify([...prev, { product, quantity }])
      );
      return [...prev, { product, quantity }];
    });
  };

  return (
    <div className="flex flex-col h-full my-6 mx-4 justify-center items-center md:flex-row">
      <div className="hover:scale-110 transition">
        <Image
          src={product.image}
          alt={product.description}
          width={300}
          height={300}
          className="object-cover object-center"
        />
      </div>
      <div className="sm:ml-3 lg:ml-20 sm:mr-5 mt-10 xl:w-[445px]">
        <div className="flex justify-start flex-col mx-4">
          <p>{product.category}</p>
          <p className="mt-3 text-[24px] sm:text-[44px] font-bold leading-10 sm:leading-tight item-title">
            {product.title}
          </p>
          <p className="leading-7 sm:leading-relaxed text-grey mt-5 text-[15px]">
            {product.description}
          </p>
        </div>
        <div className="flex gap-4 ml-6 items-center mx-4 sm:flex-col sm:ml-4 sm:justify-start sm:items-start sm:gap-2">
          <div className="flex flex-1 gap-5 sm:gap-5">
            <h1 className="text-[28px] font-bold">${product.price}</h1>
          </div>
        </div>
        <div className="mt-2 ml-4 flex justify-between items-center">
          <div className="flex gap-2">
            <AiOutlineMinus
              size={30}
              color="orange"
              onClick={handleDecrementQuantity}
              className="cursor-pointer"
            />
            <span className="mx-2 text-xl bg-gray-100 px-4">{quantity}</span>
            <AiOutlinePlus
              size={30}
              color="orange"
              onClick={handleIncrementQuantity}
              className="cursor-pointer"
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded basis-2/4"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

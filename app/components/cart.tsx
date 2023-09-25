"use client";

import { useCartContext } from "@/app/hooks/useCartContext";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";

export default function Cart() {
  const { cart, setCart } = useCartContext();
  const handleRemoveFromCart = (id: number) => {
    const filteredCart = cart.filter((item) => item.product.id !== id);
    setCart(filteredCart);
  };

  return (
    <div className="flex flex-col border border-gray-200 shadow-md absolute z-10  bg-[rgb(255,255,255)] rounded-xl top-20 inset-x-4 sm:max-w-[360px] xs:max-h-[256px] ml-auto right-10 md:h-auto">
      <div className="text-[16px] font-semibold p-5 sm:p-4">Cart</div>
      <hr className="text-[#E4E9F2]" />
      <div className="flex flex-col mt-7 text-[15px] leading-6 mx-auto text-grey p-4">
        {cart.length > 0 &&
          cart.map((item) => (
            <>
              <div className="flex gap-6 items-center">
                <div className="w-[50px] h-[50px] rounded-md overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt="product image"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="text-xs">
                  <p>{item.product.title}</p>
                  <p>
                    Price: {item.product.price} - Quantity: {item.quantity}
                  </p>
                  <p>Total: {item.product.price * item.quantity}</p>
                </div>
                <div
                  className="w-[14px] h-[16px] my-auto cursor-pointer"
                  onClick={() => handleRemoveFromCart(item.product.id)}
                >
                  <AiFillDelete size={16} color="red" />
                </div>
              </div>
              <div className="flex bg-orange h-[56px] rounded-lg mt-5 text-xs font-semibold text-[rgb(255,255,255)] cursor-pointer hover:opacity-60">
                <div className="mx-auto my-auto cursor-pointer">Checkout</div>
              </div>
            </>
          ))}
        {cart.length === 0 && (
          <div className="mx-auto my-7 font-semibold">Your cart is empty.</div>
        )}
      </div>
    </div>
  );
}

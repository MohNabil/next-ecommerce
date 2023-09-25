"use client";
import { useCartContext } from "@/app/hooks/useCartContext";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import Cart from "@/components/cart";

export const Header = () => {
  const { cart, setCart } = useCartContext();
  const [openCart, setOpenCart] = useState(false);
  const clickHandler = () => {
    setOpenCart((prev) => !prev);
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  return (
    <div className="flex justify-between items-center w-full bg-black p-4">
      <h1 className="text-white text-xl md:text-3xl">MN Store</h1>
      <span className="mr-8 cursor-pointer relative" onClick={clickHandler}>
        <BsCart2 size={30} color="white" />
        <span className="absolute -top-2 -right-[0.8rem] bg-gray-500 text-white text-sm rounded-full p-1">
          {cart.length}
        </span>
      </span>
      {openCart && <Cart />}
    </div>
  );
};

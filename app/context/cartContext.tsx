"use client";

import { createContext, useState } from "react";
import { Product } from "@/components/product";

export type Cart = {
  quantity: number;
  product: Product;
};

type CartContextType = {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

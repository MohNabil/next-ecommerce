import { useContext } from "react";
import { CartContext } from "@/app/context/cartContext";

export const useCartContext = () => {
  return useContext(CartContext);
};

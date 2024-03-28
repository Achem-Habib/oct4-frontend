"use client";

import { useCartContext } from "@/context/CartContext";
import { normalizeImageUrl } from "@/lib";
import { useState } from "react";

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCartContext();

  const { id, slug, name, discounted_price, primary_image, stock_quantity } =
    product;

  const handleIncrease = () => {
    if (quantity < stock_quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    addItemToCart({
      id: id,
      slug: slug,
      name: name,
      price: discounted_price,
      image: primary_image ? normalizeImageUrl(primary_image) : "",
      stock: stock_quantity,
      quantity: quantity,
    });
  };

  return (
    <div className="mt-6 flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-3 ">
        <span className=" font-medium">QUANTITY</span>
        <div className="flex ">
          <button
            className="bg-blue-500 text-white px-2 py-0.5 rounded-l"
            onClick={handleDecrease}
          >
            -
          </button>
          <div className="bg-gray-100 px-3 py-0.5">{quantity}</div>
          <button
            className="bg-blue-500 text-white px-2 py-0.5 rounded-r"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={addToCartHandler}
        className=" flex min-w-max max-w-xs items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add to bag
      </button>
    </div>
  );
}

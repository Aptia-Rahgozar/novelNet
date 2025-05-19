import { useState, useEffect } from "react";
import { Rating } from "./Rating";
import { Link } from "react-router";

import { useCart } from "../../context";

export const ProductCard = ({ product }) => {
  const [inCart, setInCart] = useState(false);
  const { id, name, overview, poster, price, rating, best_seller } = product;
  const { cartList, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  function handleAdd(product) {
    addToCart(product);
  }

  return (
    <div className="m-3 max-w-sm bg-PrimaryLight dark:border rounded-lg shadow-md dark:bg-darkSecondary dark:border-neutral-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-lg hover:shadow-neutral-500">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-2 bg-Accent text-white bg-opacity-90 text-darkText rounded">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-Accent dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-neutral-300">
          {overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-white">
            <span>$</span>
            <span>{price}</span>
          </span>
          {!inCart && (
            <button
              onClick={() => handleAdd(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-Tertiary hover:bg-TertiaryDarker dark:text-black dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker rounded-lg ${
                product.in_stock ? "cursor-pointer" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
            </button>
          )}
          {inCart && (
            <button
              onClick={() => removeFromCart(product)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-600 cursor-pointer"
            >
              Remove Item <i className="ml-1 bi bi-trash3"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

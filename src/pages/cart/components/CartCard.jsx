import { Link } from "react-router";
import { useCart } from "../../../context";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-wrap justify-between border-b border-Secondary dark:border-gray-300 max-w-4xl m-auto p-2 mb-5 ">
      <div className="flex">
        <a href="">
          <img
            className="w-32 rounded"
            src={product.poster}
            alt={product.name}
          />
        </a>
        <div className="">
          <Link to={`products/${product.id}`}>
            <p className="text-xl ml-2 text-Accent dark:text-gray-300">
              {product.name}
            </p>
          </Link>
          <button
            onClick={() => removeFromCart(product)}
            className="text-base font-bold ml-2 text-Tertiary hover:text-TertiaryDarker dark:text-darkTertiary dark:hover:text-darkTertiaryDarker cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-lg m-2 text-Accent dark:text-gray-300">
        <span>${product.price}</span>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Rating, useTitle } from "../components";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [inCart, setInCart] = useState(false);
  const { id } = useParams();
  const { cartList, addToCart, removeFromCart } = useCart();

  useTitle(product.name);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    }
    fetchProducts();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-Accent dark:text-white">
          {product.name}
        </h1>
        <p className="mb-5 text-lg text-center text-Accent dark:text-neutral-300">
          {product.overview}
        </p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-2xl font-bold text-Accent dark:text-white">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3">
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-Accent border border-Accent bg-PrimaryLighter dark:bg-white dark:text-black rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-Accent border	border-Accent bg-PrimaryLighter dark:bg-white dark:text-black rounded-lg px-3 py-1 mr-2">
                  IN STOCK
                </span>
              ) : (
                <span className="font-semibold text-Accent border border-Accent bg-PrimaryLighter dark:bg-white dark:text-black rounded-lg px-3 py-1 mr-2">
                  OUT OF STOCK
                </span>
              )}

              <span className="font-semibold text-Accent border border-Accent bg-PrimaryLighter dark:bg-white dark:text-black rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              {!inCart && (
                <button
                  onClick={() => addToCart(product)}
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-Tertiary dark:bg-darkTertiary dark:text-black rounded-lg hover:bg-TertiaryDarker dark:hover:bg-darkTertiaryDarker ${
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
                  className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 cursor-pointer`}
                  disabled={product.in_stock ? "" : "disabled"}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </p>
            <p className="text-lg text-Accent dark:text-neutral-300">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

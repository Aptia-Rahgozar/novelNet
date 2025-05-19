import { useState } from "react";

import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";
import { useCart } from "../../../context";

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { cartList, total } = useCart();

  return (
    <>
      <section>
        <p className="text-3xl text-center font-semibold text-Accent dark:text-white my-10">
          My Cart ({cartList.length})
        </p>
      </section>

      <section>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>

      <section className="max-w-4xl m-auto">
        <div className="flex flex-col p-2 border-b border-Secondary dark:border-gray-300 text-Accent text-lg dark:text-slate-100">
          <p className="flex justify-between my-2">
            <span className="font-semibold text-Accent dark:text-gray-300">
              Total Amount:
            </span>
            <span className="text-Accent dark:text-gray-300">${total}</span>
          </p>
        </div>
        <div className="text-right my-5">
          <button
            onClick={() => setCheckout(true)}
            type="button"
            className="text-white bg-Tertiary hover:bg-TertiaryDarker font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker cursor-pointer"
          >
            PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {checkout && <Checkout setCheckout={setCheckout} />}
    </>
  );
};

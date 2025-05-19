import { Link } from "react-router";

export const CartEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 pt-5 pb-10 dark:text-slate-100 border border-Secondary dark:border-neutral-300 rounded">
      <div className="my-5">
        <p className="bi bi-cart text-Secondary dark:text-neutral-300 text-7xl mb-5"></p>
        <p className="mb-5 font-bold text-Accent dark:text-white text-2xl">
          Your cart is empty!
        </p>
        <p className="mb-8 text-Accent dark:text-white">
          Add eBooks to your cart from our collection.
        </p>
      </div>
      <Link
        to="/products"
        type="button"
        className="text-white bg-Tertiary hover:bg-TertiaryDarker rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker focus:outline-none"
      >
        Continue Shopping <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};

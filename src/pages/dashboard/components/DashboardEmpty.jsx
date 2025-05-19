import { Link } from "react-router";

export const DashboardEmpty = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 pt-5 pb-10 text-Accent dark:text-slate-100 border border-Secondary dark:border-darkSecondaryLight rounded">
      <div className="mt-5 mb-8">
        <p className="bi bi-cart text-green-600 text-7xl mb-5"></p>
        <p>Oops! Your order dashboard looks empty!</p>
        <p>Add eBooks to your cart from our store collection.</p>
      </div>
      <Link
        to={"/products"}
        type="button"
        className="text-white bg-Tertiary hover:bg-TertiaryDarker rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker focus:outline-none"
      >
        Continue Shopping <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};

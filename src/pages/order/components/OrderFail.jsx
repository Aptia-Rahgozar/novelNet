import { Link } from "react-router";

export const OrderFail = () => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 pt-5 pb-10 dark:text-slate-100 border border-Secondary dark:border-darkSecondaryLight rounded">
      <div className="my-5 text-Accent dark:text-white">
        <p className="bi bi-exclamation-circle text-red-500 text-7xl mb-7"></p>
        <p>Payment failed, please try again!</p>
      </div>
      <div className="mt-5 mb-9 text-Accent dark:text-white">
        <p>Your order is not confirmed.</p>
        <p>
          Connect <span className="">codebook@example.com</span> for support.
        </p>
      </div>
      <Link
        to="/cart"
        type="button"
        className="text-white dark:text-darkPrimary bg-Tertiary hover:bg-TertiaryDarker rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker focus:outline-none"
      >
        Check Cart Again<i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};

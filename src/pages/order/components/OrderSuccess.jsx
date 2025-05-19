import { Link } from "react-router";

export const OrderSuccess = ({ data }) => {
  return (
    <section className="text-xl text-center max-w-4xl mx-auto my-10 pt-5 pb-10 dark:text-slate-100 border border-Secondary dark:border-darkSecondaryLight rounded">
      <div className="my-5 text-Accent dark:text-white">
        <p className="bi bi-check-circle text-green-600 text-7xl mb-6"></p>
        <p>Thank you {data.user.name} for the order!</p>
        <p>Your Order ID: {data.id}</p>
      </div>
      <div className="mt-5 mb-8 text-Accent dark:text-white">
        <p>Your order is confirmed.</p>
        <p>Please check your mail ({data.user.email}) for the eBook.</p>
        <p className="my-5">Payment ID: xyz_123456789</p>
      </div>
      <Link
        to="/products"
        type="button"
        className="text-white dark:text-darkPrimary bg-Tertiary hover:bg-TertiaryDarker rounded-lg text-lg px-5 py-2.5 mr-2 mb-5 dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker focus:outline-none"
      >
        Continue Shopping <i className="ml-2 bi bi-cart"></i>
      </Link>
    </section>
  );
};

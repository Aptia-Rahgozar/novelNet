import { Link } from "react-router";

export const DashboardCard = ({ order }) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border border-Secondary text-Accent dark:border-darkSecondaryLight">
      <div className="flex justify-between text-sm m-2 font-bold dark:text-white">
        <span>Order ID: {order.id}</span>
        <span>Total: ${order.amount_paid}</span>
      </div>
      {order.cartList.map((product) => (
        <div
          key={product.id}
          className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 "
        >
          <div className="flex">
            <Link to={`/products/${product.id}`}>
              <img
                className="w-32 rounded"
                src={product.poster}
                alt={product.name}
              />
            </Link>
            <div className="">
              <Link to={`/products/${product.id}`}>
                <p className="text-lg font-bold ml-2 dark:text-slate-200">
                  {product.name}
                </p>
              </Link>
              <div className="text-lg m-2 dark:text-slate-300">
                <span>${product.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

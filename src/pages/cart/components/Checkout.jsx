import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useCart } from "../../../context";
import { getUser, createOrder } from "../../../services";

export const Checkout = ({ setCheckout }) => {
  const { total, cartList, clearCart } = useCart();
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    }

    fetchData();
  }, []);

  async function handleOrderSubmit(event) {
    event.preventDefault();

    try {
      const data = await createOrder(cartList, total, user);
      clearCart();
      navigate("/orderSummary", { state: { data: data, status: true } });
    } catch (error) {
      navigate("/orderSummary", { state: { status: false } });
    }
  }

  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full bg-neutral-600/60"></div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative  p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
          <div className="relative bg-Primary rounded-lg shadow dark:bg-darkPrimary">
            <button
              onClick={() => setCheckout(false)}
              type="button"
              className="absolute top-3 right-2.5 text-neutral-400 bg-transparent hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-darkSecondary dark:hover:text-white cursor-pointer"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-Accent dark:text-white">
                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
              </h3>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-Accent dark:text-white"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-600 text-sm rounded-lg focus:outline-1 focus:outline-Secondary  block w-full  p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-300 dark:focus:outline-1 dark:focus:outline-neutral-200"
                    value={user.name || ""}
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-Accent dark:text-white"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="johndoe@example.com"
                    id="email"
                    className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-600 text-sm rounded-lg focus:outline-1 focus:outline-Secondary  block w-full  p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-300 dark:focus:outline-1 dark:focus:outline-neutral-200"
                    value={user.email || ""}
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="card"
                    className="block mb-2 text-sm font-medium text-Accent dark:text-white"
                  >
                    Card Number:
                  </label>
                  <input
                    type="number"
                    name="card"
                    id="card"
                    className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-600 text-sm rounded-lg focus:outline-1 focus:outline-Secondary  block w-full  p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-300 dark:focus:outline-1 dark:focus:outline-neutral-200"
                    value="4215625462597845"
                    disabled
                    required=""
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-Accent dark:text-white"
                  >
                    Expiry Date:
                  </label>
                  <input
                    type="number"
                    name="month"
                    id="month"
                    className="inline-block w-20 bg-PrimaryLighter dark:shadow-neutral-300 text-gray-600 text-sm rounded-lg focus:outline-1 focus:outline-Secondary p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-300 dark:focus:outline-1 dark:focus:outline-neutral-200"
                    value="03"
                    disabled
                    required=""
                  />
                  <input
                    type="number"
                    name="year"
                    id="year"
                    className="inline-block w-20 ml-5 bg-PrimaryLighter dark:shadow-neutral-300 text-gray-600 text-sm rounded-lg focus:outline-1 focus:outline-Secondary p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-300 dark:focus:outline-1 dark:focus:outline-neutral-200"
                    value="27"
                    disabled
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-Accent dark:text-white"
                  >
                    Security Code:
                  </label>
                  <input
                    type="number"
                    name="code"
                    id="code"
                    className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-600 text-sm rounded-lg focus:outline-1 focus:outline-Secondary  block w-full  p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-neutral-300 dark:focus:outline-1 dark:focus:outline-neutral-200"
                    value="523"
                    disabled
                    required=""
                  />
                </div>
                <p className="mb-4 text-2xl font-semibold text-Secondary dark:text-darkSecondaryLight text-center">
                  ${total}
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-Tertiary hover:bg-TertiaryDarker font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker cursor-pointer"
                >
                  <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

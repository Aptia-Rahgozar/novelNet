import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { toast } from "react-toastify";
import { useTitle } from "../../components";
import { useFilter } from "../../context";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { getProductList } from "../../services";

export const ProductsList = () => {
  const { products, initialProductList } = useFilter();
  const [show, setShow] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore All eBooks");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold text-Accent dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-Primary bg-Accent rounded-lg hover:bg-AccentLight dark:text-white dark:bg-darkSecondary dark:hover:bg-darkSecondaryLight cursor-pointer"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};

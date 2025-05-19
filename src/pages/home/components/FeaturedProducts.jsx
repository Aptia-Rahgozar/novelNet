import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../../components";
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-3xl text-center font-semibold text-Accent dark:text-white mb-5 underline-offset-8">
        Featured Titles
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

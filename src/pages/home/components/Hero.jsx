import { Link } from "react-router";
import HeroImage from "../../../assets/images/hero.jpg";

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-darkText items-center">
      <div className="text my-5 lg:max-w-1/2">
        <h1 className="text-5xl font-bold text-Accent dark:text-white">
          Read Beyond Imagination
        </h1>
        <p className="text-2xl my-7 px-1 text-Accent dark:text-white">
          <span className="text-3xl font-medium">NovelNet</span> is the world's
          most popular and trusted source for novels across all genres. Discover
          top-rated books and access the latest releases instantly.
        </p>
        <Link
          to="/products"
          type="button"
          className="bg-Tertiary hover:bg-TertiaryDarker focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 text-white dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker focus:outline-none dark:focus:ring-blue-800"
        >
          Browse Books
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img
          className="rounded-lg max-h-full"
          src={HeroImage}
          alt="CodeBook Hero Section"
        />
      </div>
    </section>
  );
};

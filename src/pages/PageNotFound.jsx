import { Link } from "react-router";
import { useTitle } from "../components/hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-Accent font-bold my-10 dark:text-white text-center">
            404, Page Not Found!
          </p>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button
              type="button"
              className="w-64 text-2xl text-white bg-Tertiary hover:bg-TertiaryDarker dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker dark:text-darkPrimary hover:cursor-pointer font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

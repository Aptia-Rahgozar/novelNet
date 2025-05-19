import { useRef } from "react";
import { useNavigate } from "react-router";

export const Search = ({ setSearchSection }) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`products?q=${searchRef.current.value}`);
  };

  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative w-full">
          <span className="bi bi-search text-Accent dark:text-white flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></span>
          <input
            ref={searchRef}
            name="search"
            type="text"
            id="simple-search"
            className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-900 text-sm rounded-lg focus:outline-1 focus:outline-Secondary  block w-full pl-10 p-2.5  dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-1 dark:focus:outline-neutral-200"
            placeholder="Search"
            autoComplete="off"
            required=""
          />
        </div>
        <button
          type="submit"
          className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white dark:text-black bg-Tertiary rounded-lg hover:bg-TertiaryDarker dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker cursor-pointer"
        ></button>
      </form>
    </div>
  );
};

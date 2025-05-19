import { Link } from "react-router";

export const DropdownLoggedOut = () => {
  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-PrimaryLighter rounded divide-y divide-gray-100 shadow dark:bg-darkSecondaryLight dark:divide-gray-600"
    >
      <ul
        className="py-1 text-sm text-Accent dark:text-neutral-300"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-darkSecondary dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/login"
            className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-darkSecondary dark:hover:text-white"
          >
            Log in
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/register"
            className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-darkSecondary dark:hover:text-white"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};

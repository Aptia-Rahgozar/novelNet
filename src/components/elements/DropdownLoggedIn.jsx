import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { logout, getUser } from "../../services";

export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        data.email ? setUser(data) : handleLogout();
      } catch (error) {
        toast.error(error.message, { position: "bottom-right" });
      }
    }
    fetchData();
  }, []);

  function handleLogout() {
    logout();
    setDropdown(false);
    navigate("/");
  }

  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 rounded divide-y divide-gray-100 shadow bg-PrimaryLighter dark:bg-darkSecondaryLight dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-Accent dark:text-white border-b border-neutral-200 dark:border-darkPrimary">
        <div className="font-medium truncate">{user.email}</div>
      </div>
      <ul
        className="py-1 text-sm border-b border-neutral-200 dark:border-darkPrimary"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="block py-2 px-4 text-Accent dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-darkSecondary dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/dashboard"
            className="block py-2 px-4 text-Accent dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-darkSecondary dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-4 text-sm text-Accent dark:text-neutral-300 hover:bg-gray-200 dark:hover:bg-darkSecondary dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};

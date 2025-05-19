import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

import { Search } from "../sections/Search";

import { DropdownLoggedOut, DropdownLoggedIn } from "../index.js";
import { useCart } from "../../context/CartContext.jsx";

import Logo from "../../assets/logo.png";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const token = JSON.parse(sessionStorage.getItem("token"));

  const dropdownRef = useRef(null);
  const loginSpanRef = useRef(null);

  const { cartList } = useCart();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Added useEffect to handle clicks outside of the dropdown and login span
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both dropdown and login span
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        loginSpanRef.current &&
        !loginSpanRef.current.contains(event.target)
      ) {
        setDropdown(false); // Close the dropdown
      }
    };

    // Attach the event listener for 'mousedown' to detect clicks
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Run only once when the component mounts

  return (
    <header>
      <nav className="bg-color04 bg-Secondary dark:bg-darkSecondary text-Primary dark:text-white">
        <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="NovelNet Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              NovelNet
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-Accent hover:text-Primary dark:text-neutral-200 dark:hover:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-xl text-Accent hover:text-Primary dark:text-neutral-200 dark:hover:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-Accent hover:text-Primary mr-5">
              <span className="text-2xl bi bi-cart-fill relative dark:text-neutral-200 dark:hover:text-white">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-TertiaryDarker px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              ref={loginSpanRef}
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl dark:text-neutral-200 dark:hover:text-white text-Accent hover:text-Primary"
            ></span>
            {dropdown && (
              <div ref={dropdownRef}>
                {token ? (
                  <DropdownLoggedIn setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedOut setDropdown={setDropdown} />
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};

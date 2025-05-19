import { useRef } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useTitle } from "../components/hooks/useTitle";
import { login } from "../services";

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  useTitle("Login");

  async function handleLogin(event) {
    event.preventDefault();

    const authDetail = {
      email: email.current.value,
      password: password.current.value,
    };
    const data = await login(authDetail);
    data.accessToken ? navigate("/products") : toast.error(data);
  }

  return (
    <main>
      <section>
        <p className="text-3xl text-center font-semibold text-Accent dark:text-white my-10">
          Login
        </p>
      </section>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-Accent dark:text-gray-300"
          >
            Your email
          </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-900 text-sm rounded-lg focus:outline-1 focus:outline-Secondary block w-full p-2.5 dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-1 dark:focus:outline-neutral-200"
            placeholder="johndoe@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-Accent dark:text-gray-300"
          >
            Your password
          </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-900 text-sm rounded-lg focus:outline-1 focus:outline-Secondary block w-full p-2.5 dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-1 dark:focus:outline-neutral-200"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-Tertiary hover:bg-TertiaryDarker focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker dark:focus:ring-blue-800 cursor-pointer mt-5"
        >
          Log In
        </button>
      </form>
      {/* <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button> */}
    </main>
  );
};

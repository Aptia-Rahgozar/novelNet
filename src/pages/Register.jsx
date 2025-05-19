import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useTitle } from "../components/hooks/useTitle";
import { register } from "../services";

export const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      const data = await register(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
      toast.error(error.message, { position: "bottom-right" });
    }
  }

  return (
    <main>
      <section>
        <p className="text-3xl text-center font-semibold text-Accent dark:text-white my-10">
          Register
        </p>
      </section>
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-Accent dark:text-gray-300"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-900 text-sm rounded-lg focus:outline-1 focus:outline-Secondary block w-full p-2.5 dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-1 dark:focus:outline-neutral-200"
            placeholder="John Doe"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-Accent dark:text-gray-300"
          >
            Your email
          </label>
          <input
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
            type="password"
            id="password"
            className="bg-PrimaryLighter dark:shadow-neutral-300 text-gray-900 text-sm rounded-lg focus:outline-1 focus:outline-Secondary block w-full p-2.5 dark:bg-darkSecondaryLight dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-1 dark:focus:outline-neutral-200"
            required
            minLength="7"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-Tertiary hover:bg-TertiaryDarker focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-darkPrimary dark:bg-darkTertiary dark:hover:bg-darkTertiaryDarker dark:focus:ring-blue-800 cursor-pointer mt-5"
        >
          Register
        </button>
      </form>
    </main>
  );
};

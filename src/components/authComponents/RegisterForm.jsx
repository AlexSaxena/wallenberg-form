import authStore from "../../../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await store.register();

    // navigate to LoginPage
    navigate("/studenter");
  };

  return (
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Registrera dig
          </h1>
          <p className="mt-2 text-gray-500">
            Fyll i formuläret för att skapa ditt konto
          </p>
        </div>
        <div className="mt-5">
          <form onSubmit={handleRegister}>
            <div className="relative mt-6">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Användarnamn"
                onChange={store.updateRegisterForm}
                value={store.registerForm.username}
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="username"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Användarnamn
              </label>
            </div>
            <div className="relative mt-6">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Lösenord"
                onChange={store.updateRegisterForm}
                value={store.registerForm.password}
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Lösenord
              </label>
            </div>
            <div className="my-6">
              <button
                type="submit"
                className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Registrera Användare
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

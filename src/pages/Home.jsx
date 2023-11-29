import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header />
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Raoul Wallenberg Skolan</h1>
        <p className="text-lg text-gray-600 mb-4">Formulär för elever</p>
      </div>
      <div className="flex items-center justify-center flex-grow ">
        <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full">
          <p className="text-xl font-semibold mb-4">Formulär För Nya Elever</p>
          <p className="text-gray-700 mb-4">
            Välkommen till Raoul Wallenberg Skolan! Fyll i formuläret för nya
            studenter.
          </p>
          <Link to="/form">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600">
              Till Formulär
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

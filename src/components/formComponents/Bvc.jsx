const Bvc = () => {
  return (
    <div>
      <label htmlFor="bvc" className="text-sm font-medium text-gray-700">
        TIDIGARE BVC?*
      </label>
      <input
        type="text"
        id="bvc"
        name="bvc"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required
      />
    </div>
  );
};

export default Bvc;

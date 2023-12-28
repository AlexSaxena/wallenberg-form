import { useState } from "react";

const Fritids = () => {
  // You might want to manage state here if you need to handle the selected value
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <span className="text-sm font-medium text-gray-700">
        Ska eleven gå på fritidshem/fritidsklubb?
      </span>
      <div className="mt-2">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="fritids"
            className="form-radio"
            value="ja"
            checked={selectedValue === "ja"}
            onChange={handleChange}
          />
          <span className="ml-2">Ja</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            name="fritids"
            className="form-radio"
            value="nej"
            checked={selectedValue === "nej"}
            onChange={handleChange}
          />
          <span className="ml-2">Nej</span>
        </label>
      </div>
    </div>
  );
};

export default Fritids;

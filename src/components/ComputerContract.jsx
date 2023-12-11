import { useState } from "react";

const ComputerContract = () => {
  const [computerContractAccepted, setComputerContractAccepted] =
    useState(false);

  const toggleComputerContract = () => {
    setComputerContractAccepted(!computerContractAccepted);
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <input
          id="computerContractCheckbox"
          type="checkbox"
          className="form-checkbox"
          checked={computerContractAccepted}
          onChange={toggleComputerContract}
        />
        <label htmlFor="computerContractCheckbox" className="ml-2">
          Jag accepterar villkoren i datoravtalet.
        </label>
      </div>
    </div>
  );
};

export default ComputerContract;

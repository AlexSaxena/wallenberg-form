import React, { useState } from 'react';

const Allergies = () => {
  const [hasAllergies, setHasAllergies] = useState(false);
  const [allergyExplanation, setAllergyExplanation] = useState('');

  const toggleAllergies = () => {
    setHasAllergies(!hasAllergies);
  };

  const handleAllergyChange = (event) => {
    setAllergyExplanation(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <input
          id="allergiesCheckbox"
          type="checkbox"
          className="form-checkbox"
          checked={hasAllergies}
          onChange={toggleAllergies}
        />
        <label htmlFor="allergiesCheckbox" className="ml-2">
          Allergier?
        </label>
      </div>

      {hasAllergies && (
        <div className="flex flex-col mb-4">
          <label htmlFor="allergyExplanation" className="font-semibold mt-2">
            Skriv barnets allergier här:
          </label>
          <textarea
            id="allergyExplanation"
            className="form-textarea mt-1 block w-full"
            rows="3"
            placeholder="Skriv barnets allergier här:"
            value={allergyExplanation}
            onChange={handleAllergyChange}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default Allergies;

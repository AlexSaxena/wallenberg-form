import React from "react";

const PreviousSchool = () => {
  return (
    <div>
      <div>
        <label
          htmlFor="previous_school"
          className="text-sm font-medium text-gray-700"
        >
          TIDIGARE SKOLA?*
        </label>
        <input
          type="text"
          id="previous_school"
          name="previous_school"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label
          htmlFor="previous_school_teacher"
          className="text-sm font-medium text-gray-700"
        >
          TIDIGARE SKOLAS LÄRARE/MENTOR*
        </label>
        <input
          type="text"
          id="previous_school_teacher"
          name="previous_school_teacher"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>
    </div>
  );
};

export default PreviousSchool;

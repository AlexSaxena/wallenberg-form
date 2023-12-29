import { useState } from "react";
import Fritids from "./Fritids";
import PreviousSchool from "./PreviousSchool";
import Bvc from "./Bvc";
import LanguageSelect from "./LanguageSelect";
import ProfileSelection from "./ProfileSelection";

// eslint-disable-next-line react/prop-types
const SchoolClassSelection = ({ onGradeChange }) => {
  const [selectedClass, setSelectedClass] = useState("");

  const handleChange = (event) => {
    setSelectedClass(event.target.value);
    onGradeChange(event);
  };

  const renderMessage = () => {
    switch (selectedClass) {
      case "förskoleklass":
        return (
          <>
            <br />
            <Fritids />
            <br />
            <Bvc />
            <br />
          </>
        );
      case "klass1":
      case "klass2":
      case "klass3":
      case "klass4":
      case "klass5":
        return (
          <>
            <br />
            <Fritids />
            <br />
            <PreviousSchool />
            <br />
          </>
        );
      case "klass6":
      case "klass7":
      case "klass8":
      case "klass9":
        return (
          <>
            <br />
            <PreviousSchool />
            <br />
            {/* Språkval */}
            <LanguageSelect />
            <br />
            {/* Profilval */}
            <ProfileSelection />
            <br />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        Vilken klass ska eleven börja i?
      </label>
      <select
        id="grade"
        name="grade"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={handleChange}
        value={selectedClass}
      >
        <option value="">Välj klass</option>
        <option value="förskoleklass">förskoleklass</option>
        <option value="klass1">1</option>
        <option value="klass2">2</option>
        <option value="klass3">3</option>
        <option value="klass4">4</option>
        <option value="klass5">5</option>
        <option value="klass6">6</option>
        <option value="klass7">7</option>
        <option value="klass8">8</option>
        <option value="klass9">9</option>
      </select>
      {renderMessage()}
    </div>
  );
};

export default SchoolClassSelection;

import { useState } from "react";

const ProfileSelection = () => {
  const [selectedLanguages, setSelectedLanguages] = useState({
    first: "",
    second: "",
  });
  const languages = ["Idrott", "Språk", "Äventyr", "Lek"];

  const handleLanguageChange = (event, step) => {
    setSelectedLanguages({
      ...selectedLanguages,
      [step]: event.target.value,
    });
  };

  const getOptions = (step) => {
    return languages.filter(
      (language) =>
        !Object.values(selectedLanguages).includes(language) ||
        selectedLanguages[step] === language
    );
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        Som profilval vill eleven välja:
      </label>

      <select
        id="language_one"
        name="language_one"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => handleLanguageChange(e, "first")}
        value={selectedLanguages.first}
      >
        <option value="">Altenativ 1</option>
        {getOptions("first").map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <select
        id="language_two"
        name="language_two"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(e) => handleLanguageChange(e, "second")}
        value={selectedLanguages.second}
      >
        <option value="">Altenativ 2</option>
        {getOptions("second").map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProfileSelection;

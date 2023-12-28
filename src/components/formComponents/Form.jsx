import { useState } from "react";
// import axios from "axios";

import SchoolClassSelection from "./SchoolClassSelection";
import HouseholdIncome from "./HouseholdIncome";
import Allergies from "./Allergies";
import ComputerContract from "./ComputerContract";
import GdprConsent from "./GdprConsent";
import IncomeDeclaration from "./IncomeDeclaration";
import GuardianForm from "./GuardianForm";
import NativeLanguageChoice from "./NativeLanguageChoice";

export default function PlacesForm() {
  const [showNumbersGuardians, setNumbersGuardians] = useState(false);
  const [showNativeLanguageChoice, setShowNativeLanguageChoice] =
    useState(false);

  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [numberOfGuardians, setNumberOfGuardians] = useState(1);

  // Handler for Checking selected School
  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  // Handler for choosing the number of guardians
  const handleNumberOfGuardiansChange = (event) => {
    const selectedNumber = parseInt(event.target.value, 10);
    setNumbersGuardians(selectedNumber === 2);
    setNumberOfGuardians(selectedNumber);
  };

  // Handler for checking selected Grade
  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  // Handler For Submitting data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Manually set the value for the allergiesCheckbox field
    const allergiesCheckbox = formData.get("allergiesCheckbox");
    formData.set(
      "allergiesCheckbox",
      allergiesCheckbox === "on" ? "ja" : "nej"
    );

    // Convert formData to a plain object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Log Data Sanity check
    console.table("Form Data:", formData);

    // TEMP COMMENTED FOR TESTING
    // Send the form data to API using Axios
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3001/api/studentForm",
    //     formObject
    //   );
    //   console.log(response.data); // Handle response.
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto p-8">
          <div className="bg-white shadow rounded-lg p-6">
            {/* <form action="#" method="POST" className="space-y-4"> */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Elevens Förnamn*
                </label>
                <input
                  type="text"
                  id="student_first_name"
                  name="student_first_name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Elevens Efternamn*
                </label>
                <input
                  type="text"
                  id="student_last_name"
                  name="student_last_name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Personnummer (YYYDDMM-XXXX)*
                </label>
                <input
                  type="text"
                  id="personal_number"
                  name="personal_number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Antal vårdnadshavare
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="number_of_guardians"
                      className="form-radio"
                      value="1"
                      checked={numberOfGuardians === 1}
                      onChange={handleNumberOfGuardiansChange}
                    />
                    <span className="ml-2">1</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="number_of_guardians"
                      className="form-radio"
                      value="2"
                      checked={numberOfGuardians === 2}
                      onChange={handleNumberOfGuardiansChange}
                    />
                    <span className="ml-2">2</span>
                  </label>
                </div>
              </div>

              <GuardianForm
                number={1}
                setNumbersGuardians={setNumbersGuardians}
              />
              {showNumbersGuardians && (
                <GuardianForm
                  number={2}
                  setNumbersGuardians={setNumbersGuardians}
                />
              )}

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Kommun där eleven är folkbokförd
                </label>
                <select
                  id="county"
                  name="student_county"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Välj kommun</option>
                  <option value="county1">kommun 1</option>
                  <option value="county2">kommun 2</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Vilken skola ska eleven börja på?
                </label>
                <select
                  id="school"
                  name="school"
                  onChange={handleSchoolChange}
                  value={selectedSchool}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Välj skola</option>
                  <option value="bagartorp">RWS Bagartorp</option>
                  <option value="bromma">RWS Bromma</option>
                  <option value="järvastaden">RWS Järvastaden</option>
                  <option value="lidköping">RWS Lidköping</option>
                  <option value="skövde">RWS Skövde</option>
                  <option value="uppsala">RWS Uppsala</option>
                </select>
              </div>
              <div>
                {/* Vilken klass / årskurs */}
                <SchoolClassSelection onGradeChange={handleGradeChange} />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Vi/Jag samtycker till att bild får finnas med i skolkatalogen
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="picture_school_catalogue"
                      className="form-radio"
                      value="ja"
                    />
                    <span className="ml-2">Ja</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="picture_school_catalogue"
                      className="form-radio"
                      value="nej"
                    />
                    <span className="ml-2">Nej</span>
                  </label>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Vi/Jag samtycker till att bild eller korta filmer får
                  publiceras internt
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="image_published_internally"
                      className="form-radio"
                      value="ja"
                    />
                    <span className="ml-2">Ja</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="image_published_internally"
                      className="form-radio"
                      value="nej"
                    />
                    <span className="ml-2">Nej</span>
                  </label>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Vi/Jag samtycker till att bild eller korta filmer får
                  publiceras externt
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="image_published_externally"
                      className="form-radio"
                      value="ja"
                    />
                    <span className="ml-2">Ja</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="image_published_externally"
                      className="form-radio"
                      value="nej"
                    />
                    <span className="ml-2">Nej</span>
                  </label>
                </div>
              </div>
              {/* Om barnet vill läsa modersmål extra */}
              <NativeLanguageChoice
                showNativeLanguageChoice={showNativeLanguageChoice}
                setShowNativeLanguageChoice={setShowNativeLanguageChoice}
              />
              {/* Om barnet har allergier */}
              <Allergies />
              {/* Om barnet / VH accepterar dator kontraktet */}
              <ComputerContract />
              {/* Om VH accepterar GDPR */}
              <GdprConsent />
              {/* Om man valt fritidshem/fritidsklubb RWS Bromma och Skövde */}
              {(selectedSchool === "skövde" || selectedSchool === "bromma") &&
                ((selectedGrade >= "1" && selectedGrade <= "5") ||
                  selectedGrade === "förskoleklass") && <IncomeDeclaration />}

              <hr />
              <HouseholdIncome />
              <hr />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

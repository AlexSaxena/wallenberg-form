import { useState } from "react";
// import axios from "axios";

import SchoolClassSelection from "./SchoolClassSelection";
import HouseholdIncome from "./HouseholdIncome";
import Allergies from "./Allergies";
import ComputerContract from "./ComputerContract";
import GdprConsent from "./GdprConsent";
import IncomeDeclaration from "./IncomeDeclaration";

export default function PlacesForm() {
  const [showNumbers_guardians, setNumbers_guardians] = useState(false);
  const [showNativeLanguageChoice, setshowNativeLanguageChoice] =
    useState(false);

  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  // Handler for Checking selected School
  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
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
                  Elevens Namn*
                </label>
                <input
                  type="text"
                  id="student_name"
                  name="student_name"
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
                      name="numbers_guardians"
                      className="form-radio"
                      value="1"
                      onChange={() => setNumbers_guardians(false)}
                    />
                    <span className="ml-2">1</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="numbers_guardians"
                      className="form-radio"
                      value="2"
                      onChange={() => setNumbers_guardians(true)}
                    />
                    <span className="ml-2">2</span>
                  </label>
                </div>
              </div>
              <div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    Vänligen fyll i uppgifter till vårdnadshavare 1*
                  </h3>
                  <label className="text-sm font-medium text-gray-700">
                    Namn
                  </label>
                  <input
                    type="text"
                    id="guardian_one_name"
                    name="guardian_one_name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Personnummer (YYYYDDMM-XXXX)*
                  </label>
                  <input
                    type="text"
                    id="guardian_one_personal_number"
                    name="guardian_one_personal_number"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    E-post*
                  </label>
                  <input
                    type="text"
                    id="guardian_one_e-mail"
                    name="guardian_one_e-mail"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>
              </div>
              {showNumbers_guardians && (
                <div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700">
                      Vänligen fyll i uppgifter till vårdnadshavare 2*
                    </h3>
                    <label className="text-sm font-medium text-gray-700">
                      Namn
                    </label>
                    <input
                      type="text"
                      id="guardian_two_name"
                      name="guardian_two_name"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Personnummer (YYYYDDMM-XXXX)*
                    </label>
                    <input
                      type="text"
                      id="guardian_two_personal_number"
                      name="guardian_two_personal_number"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      E-post*
                    </label>
                    <input
                      type="text"
                      id="guardian_two_e-mail"
                      name="guardian_two_e-mail"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
                    />
                  </div>
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Kommun där eleven är folkbokförd
                </label>
                <select
                  id="county"
                  name="county"
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
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Vill (elevs namn) ansöka om modersmålsundervisning?
                </span>
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="native_language"
                      className="form-radio"
                      value="ja"
                      onChange={() => setshowNativeLanguageChoice(true)}
                    />
                    <span className="ml-2">Ja</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      name="native_language"
                      className="form-radio"
                      value="nej"
                      onChange={() => setshowNativeLanguageChoice(false)}
                    />
                    <span className="ml-2">Nej</span>
                  </label>
                </div>
              </div>
              {showNativeLanguageChoice && (
                <>
                  <div>
                    <h2 className="text-xl mt-4">
                      Undervisning i modersmål utom nationella minoritetsspråk
                    </h2>
                    <p className=" text-sm">
                      Elever i grundskolan, grundsärskolan, specialskolan och
                      sameskolan ska erbjudas undervisning i modersmål som inte
                      är ett nationellt minoritetsspråk om - en eller båda
                      vårdnadshavarna har ett annat språk än svenska som
                      modersmål - språket utgör elevens dagliga umgängesspråk i
                      hemmet - eleven har grundläggande kunskaper i språket.
                      Huvudmannen är bara skyldig att anordna
                      modersmålsundervisning i ett språk om - det finns minst
                      fem elever som har rätt till undervisningen i det språket
                      - dessa elever vill få undervisning i språket - det finns
                      en lämplig lärare
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Välj språk
                    </label>
                    <select
                      id="native_language_choice"
                      name="native_language_choice"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      <option value="">Välj språk</option>
                      <option value="language1">språk 1</option>
                      <option value="language2">språk 2</option>
                    </select>
                  </div>
                </>
              )}
              {/* Om barnet har allergier */}
              <Allergies />
              {/* Om barnet VH accepterar dator kontraktet */}
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

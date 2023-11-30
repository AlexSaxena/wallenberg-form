import React, { useState } from 'react';
import Fritids from "./Fritids";
import PreviousSchool from './PreviousSchool'
import Bvc from './Bvc';
import LanguageSelect from './LanguageSelect'
import ProfileSelection from "./ProfileSelection";

const SchoolClassSelection = () => {
  const [selectedClass, setSelectedClass] = useState('');

  const handleChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const renderMessage = () => {
    switch (selectedClass) {
      case 'förskoleklass':
        return <>
        <br />
        <Fritids/>
        <br />
        <Bvc/>
        <br />
        </>;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
        return  <> 
        <br />
        <Fritids/>
        <br />
        <PreviousSchool/>
        <br />
        </>;
      case '6':
      case '7':
      case '8':
      case '9':
        return <> 
        <br />
        <PreviousSchool/>
        <br />
                {/* Språkval */}
                <LanguageSelect />
                <br />
                {/* Profilval */}
                <ProfileSelection/>
                <br />
        </>
      default:
        return null;
    }
  };

  return (
    <div>
      <label className="text-sm font-medium text-gray-700">Vilken klass ska eleven börja i?</label>
      <select 
        id="class" 
        name="class" 
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={handleChange}
        value={selectedClass}
      >
        <option value="">Välj klass</option>
        <option value="förskoleklass">förskoleklass</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      {renderMessage()}
    </div>
  );
};

export default SchoolClassSelection;

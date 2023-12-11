import { useState } from "react";

const GdprConsent = () => {
  const [gdprConsentGiven, setGdprConsentGiven] = useState(false);

  const toggleGdprConsent = () => {
    setGdprConsentGiven(!gdprConsentGiven);
  };

  return (
    <div>
      <div className="flex items-center my-4">
        <input
          id="gdprConsentCheckbox"
          type="checkbox"
          className="form-checkbox"
          checked={gdprConsentGiven}
          onChange={toggleGdprConsent}
        />
        <label htmlFor="gdprConsentCheckbox" className="ml-2">
          Jag har läst och accepterat dataskyddsförordningen (GDPR). Vi
          bekräftar att information mottagits om personuppgiftsbehandlingen inom
          RWS
        </label>
      </div>
    </div>
  );
};

export default GdprConsent;

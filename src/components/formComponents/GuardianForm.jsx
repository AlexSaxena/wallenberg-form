// eslint-disable-next-line react/prop-types
const GuardianForm = ({ number, setNumbersGuardians }) => {
  return (
    <div>
      <div>
        <h3 className="text-sm font-medium text-gray-700">
          Vänligen fyll i uppgifter till vårdnadshavare {number}*
        </h3>
        <label className="text-sm font-medium text-gray-700">Namn</label>
        <input
          type="text"
          id={`guardian_${number}_name`}
          name={`guardian_${number}_name`}
          placeholder="Namn"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Personnummer (YYYYDDMM-XXXX)*
        </label>
        <input
          type="number"
          id={`guardian_${number}_personal_number`}
          name={`guardian_${number}_personal_number`}
          placeholder="Personnummer"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">E-post*</label>
        <input
          type="email"
          id={`guardian_${number}_email`}
          name={`guardian_${number}_email`}
          placeholder="E-post"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Adress</label>
        <input
          type="text"
          id={`guardian_${number}_address`}
          name={`guardian_${number}_address`}
          placeholder="Adress"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Postnummer</label>
        <input
          type="number"
          id={`guardian_${number}_postal_code`}
          name={`guardian_${number}_postal_code`}
          placeholder="Postnummer"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Ort</label>
        <input
          type="text"
          id={`guardian_${number}_city`}
          name={`guardian_${number}_city`}
          placeholder="Ort"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Telefonnummer
        </label>
        <input
          type="tel"
          id={`guardian_${number}_phone`}
          name={`guardian_${number}_phone`}
          placeholder="Telefonnummer"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
    </div>
  );
};

export default GuardianForm;

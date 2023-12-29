import { useState } from "react";

const statements = [
  "Lön, Arvode, förmåner:",
  "pension, aktivitetsersättning och sjukersättning:",
  "Livränta och periodisk understöd:",
  "Ersättning från sjuk- och olycksfallsersättning:",
  "Arbetslösersättning:",
  "Skattepliktigt utbildningsbidrag:",
  "Inkomst av näringsverksamhet efter avdrag för egenavgifter:",
  "Vårdbidrag:",
  "Vårdbidrag:",
];

// eslint-disable-next-line react/prop-types
const HouseholdIncome = ({ numberOfGuardians }) => {
  const [acceptsMaxFee, setAcceptsMaxFee] = useState(false);
  const [incomeValues, setIncomeValues] = useState(
    Array(statements.length).fill({ income1: "", income2: "" })
  );
  const [totals, setTotals] = useState({ income1: 0, income2: 0 });
  const [isIrregularIncome, setIsIrregularIncome] = useState(false);
  const [irregularIncomeExplanation, setIrregularIncomeExplanation] =
    useState("");

  const handleCheckboxChange = (event) => {
    setAcceptsMaxFee(event.target.checked);
  };

  const handleIncomeChange = (index, income, value) => {
    const newIncomeValues = [...incomeValues];
    newIncomeValues[index] = { ...newIncomeValues[index], [income]: value };
    setIncomeValues(newIncomeValues);

    const newTotals = newIncomeValues.reduce(
      (acc, current) => ({
        income1: acc.income1 + (Number(current.income1) || 0),
        income2: acc.income2 + (Number(current.income2) || 0),
      }),
      { income1: 0, income2: 0 }
    );
    setTotals(newTotals);
  };

  const toggleIrregularIncome = () => {
    setIsIrregularIncome(!isIrregularIncome);
  };

  const handleIrregularIncomeChange = (event) => {
    setIrregularIncomeExplanation(event.target.value);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-center my-4">Hushållets inkomst</h1>
      <p className="text-center mb-4">
        Lämnas inte begärda inkomstuppgifter debiteras högsta avgift enligt
        gällande taxa.
      </p>
      <div className="flex items-center mb-4">
        <input
          id="maxFeeCheckbox"
          name="maxFeeCheckbox"
          type="checkbox"
          className="form-checkbox"
          checked={acceptsMaxFee}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="maxFeeCheckbox" className="ml-2">
          Hushållet accepterar högsta avgift/se resp. kommuns maxtaxa
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="font-semibold py-2 text-left">
                Avgiftgrundande bruttoinkomst (Inkomst före skatt) per månad
              </th>
              <th className="font-semibold py-2 text-left">
                Vårdnadshavare 1 - fakturamottagare
              </th>
              {numberOfGuardians === 2 && (
                <th className="font-semibold py-2 text-left">
                  Vårdnadshavare 2 - /Sammanboende
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {statements.map((statement, index) => (
              <tr key={index}>
                <td className="py-2">
                  <div className="flex flex-col">
                    <label className="mt-1 block w-full">{statement}</label>
                  </div>
                </td>
                <td className="py-2">
                  <div className="flex flex-col">
                    <input
                      type="number"
                      className="form-input mt-1 block w-full"
                      placeholder="SEK"
                      value={incomeValues[index].income1}
                      onChange={(e) =>
                        handleIncomeChange(index, "income1", e.target.value)
                      }
                    />
                  </div>
                </td>
                {numberOfGuardians === 2 && (
                  <td className="py-2">
                    <div className="flex flex-col">
                      <input
                        type="number"
                        className="form-input mt-1 block w-full"
                        placeholder="SEK"
                        value={incomeValues[index].income2}
                        onChange={(e) =>
                          handleIncomeChange(index, "income2", e.target.value)
                        }
                      />
                    </div>
                  </td>
                )}
              </tr>
            ))}
            <tr className="bg-gray-100">
              <td className="py-2 font-semibold">Totalt</td>
              <td className="py-2">
                <div className="flex flex-col">
                  <span className="mt-1 block w-full">
                    {totals.income1} SEK
                  </span>
                </div>
              </td>
              {numberOfGuardians === 2 && (
                <td className="py-2">
                  <div className="flex flex-col">
                    <span className="mt-1 block w-full">
                      {totals.income2} SEK
                    </span>
                  </div>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex items-center my-4">
        <input
          id="irregularIncomeCheckbox"
          name="irregularIncomeCheckbox"
          type="checkbox"
          className="form-checkbox"
          checked={isIrregularIncome}
          onChange={toggleIrregularIncome}
        />
        <label htmlFor="irregularIncomeCheckbox" className="ml-2">
          Oregelbunden inkomst (OBS! hushållets inkomst måste uppskattas i
          tabellen ovanför)
        </label>
      </div>
      {isIrregularIncome && (
        <div className="flex flex-col mb-4">
          <label
            htmlFor="irregularIncomeExplanation"
            className="font-semibold mt-2"
          >
            Förklaring av oregelbunden inkomst:
          </label>
          <textarea
            id="irregularIncomeExplanation"
            name="irregularIncomeExplanation"
            className="form-textarea mt-1 block w-full"
            rows="3"
            placeholder="Beskriv din oregelbundna inkomst här"
            value={irregularIncomeExplanation}
            onChange={handleIrregularIncomeChange}
          ></textarea>
        </div>
      )}
    </div>
  );
};

export default HouseholdIncome;

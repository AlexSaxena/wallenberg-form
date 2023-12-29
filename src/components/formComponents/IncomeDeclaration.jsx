// eslint-disable-next-line react/prop-types
const IncomeDeclaration = ({ numberOfGuardians }) => {
  return (
    <>
      <h1 className="text-xl font-bold text-center my-4">Inkomstanmälan</h1>
      <h3>
        Inkomstanmälan för skolbarnsomsorgsavgift (gäller endast RWS Bromma och
        Skövde då man valt att gå på fritidshem/fritidsklubb)
      </h3>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="col-span-2 font-semibold">
          Vårdnadshavare 1 (fakturamottagare)
        </div>
        <div className="flex flex-col">
          <label className="font-semibold mt-2">Namn:</label>
          <input
            type="text"
            name="guardian1-income-name"
            className="form-input mt-1 block w-full"
            placeholder="Fullständigt namn"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mt-2">Personnummer:</label>
          <input
            type="text"
            name="guardian1-income-personnummer"
            className="form-input mt-1 block w-full"
            placeholder="ÅÅÅÅMMDD-XXXX"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mt-2">Adress:</label>
          <input
            type="text"
            name="guardian1-income-adress"
            className="form-input mt-1 block w-full"
            placeholder="Gatuadress"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mt-2">Postnummer:</label>
          <input
            type="text"
            name="guardian1-income-postnummer"
            className="form-input mt-1 block w-full"
            placeholder="Postnummer"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mt-2">Mobilnummer/telefon</label>
          <input
            type="text"
            name="guardian1-income-telnr"
            className="form-input mt-1 block w-full"
            placeholder="Mobilnummer"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mt-2">Arbetsgivare/skola</label>
          <input
            type="text"
            name="guardian1-income-arbetsgivare"
            className="form-input mt-1 block w-full"
            placeholder="Arbetsgivare"
          />
        </div>

        {numberOfGuardians === 2 && (
          <>
            <div className="col-span-2 font-semibold">
              Vårdnadshavare 2/Sammanboende
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mt-2">Namn:</label>
              <input
                type="text"
                name="guardian2-income-name"
                className="form-input mt-1 block w-full"
                placeholder="Fullständigt namn"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold mt-2">Personnummer:</label>
              <input
                type="text"
                name="guardian2-income-personnummer"
                className="form-input mt-1 block w-full"
                placeholder="ÅÅÅÅMMDD-XXXX"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mt-2">Adress:</label>
              <input
                type="text"
                name="guardian2-income-adress"
                className="form-input mt-1 block w-full"
                placeholder="Gatuadress"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mt-2">Postnummer:</label>
              <input
                type="text"
                name="guardian2-income-postnummer"
                className="form-input mt-1 block w-full"
                placeholder="Postnummer"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mt-2">Mobilnummer/telefon</label>
              <input
                type="text"
                name="guardian2-income-telnr"
                className="form-input mt-1 block w-full"
                placeholder="Mobilnummer"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mt-2">Arbetsgivare/skola</label>
              <input
                type="text"
                name="guardian2-income-arbetsgivare"
                className="form-input mt-1 block w-full"
                placeholder="Arbetsgivare"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default IncomeDeclaration;

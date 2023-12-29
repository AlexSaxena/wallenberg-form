const NativeLanguageChoice = ({
  // eslint-disable-next-line react/prop-types
  showNativeLanguageChoice,
  // eslint-disable-next-line react/prop-types
  setShowNativeLanguageChoice,
}) => {
  return (
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
            value="JA"
            checked={showNativeLanguageChoice}
            onChange={() => setShowNativeLanguageChoice(true)}
          />
          <span className="ml-2">Ja</span>
        </label>
        <label className="inline-flex items-center ml-6">
          <input
            type="radio"
            name="native_language"
            className="form-radio"
            value="NEJ"
            checked={!showNativeLanguageChoice}
            onChange={() => setShowNativeLanguageChoice(false)}
          />
          <span className="ml-2">Nej</span>
        </label>
      </div>

      {showNativeLanguageChoice && (
        <>
          <div>
            <h2 className="text-xl mt-4">
              Undervisning i modersmål utom nationella minoritetsspråk
            </h2>
            <p className="text-sm">
              Elever i grundskolan, grundsärskolan, specialskolan och sameskolan
              ska erbjudas undervisning i modersmål som inte är ett nationellt
              minoritetsspråk om - en eller båda vårdnadshavarna har ett annat
              språk än svenska som modersmål - språket utgör elevens dagliga
              umgängesspråk i hemmet - eleven har grundläggande kunskaper i
              språket. Huvudmannen är bara skyldig att anordna
              modersmålsundervisning i ett språk om - det finns minst fem elever
              som har rätt till undervisningen i det språket - dessa elever vill
              få undervisning i språket - det finns en lämplig lärare
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
    </div>
  );
};

export default NativeLanguageChoice;

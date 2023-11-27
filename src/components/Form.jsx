
const Form = () => {
  return (
    <div className="create">
      <h2>Formulär</h2>

      <form>
        <label htmlFor="För- och efternamn">För- och efternamn</label>
        <input
          type="text"
          id="För- och efternamn"
          name="För- och efternamn"
          placeholder="Förnamn Efternamn"
        />

        <label htmlFor="Epost">Epost</label>
        <input type="text" id="Epost" name="Epost" placeholder="E-postadress" />

        <label htmlFor="Telefonnummer">Telefonnummer</label>
        <input
          type="number"
          id="Telefonnummer"
          name="Telefonnummer"
          placeholder="+46"
        />
        <label htmlFor="Elevns namn">Elevns namn</label>
        <input
          type="text"
          id="Elevns namn"
          name="Elevns namn"
          placeholder="Förnamn Efternamn"
        />
        <label htmlFor="Inriktning">Inriktning</label>
        <select>
          <option value="Estet-bild">Estet-bild</option>
          <option value="Estet-musik">Estet-musik</option>
          <option value="Sport-fotboll">Sport-fotboll</option>
          <option value="Sport-basket">Sport-basket</option>
        </select>
      </form>

      <button>Submit</button>
    </div>
  );
};

export default Form;

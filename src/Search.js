import { useState, useEffect } from "react";
import MovieSearch from './MovieSearch';


function Search() {
  //this use state gets the year that is being populated in the dorpdown menu
  const [year, setYear] = useState([]);
  //user selceted year. this info is also passed to the api call
  const [userYear, setUserYear] = useState("placeHolder");

  const handleUserChoice = (e) => {
    //getting the usenpmr value
    setUserYear(e.target.value);
  };

  useEffect(() => {
    //CREDIT THIS SOURCE https://renatello.com/javascript-array-of-years/
    const max = new Date().getFullYear();
    //change the number to display more or less years
    const min = max - "50";
    const years = [];

    for (let i = max; i >= min; i--) {
      years.push(i.toString());
      setYear(years);
    }
  }, []);

  return (
    <section className="search-container">
      <div className="wrapper option-container">
        <h2>Please Select The year</h2>

        <form
          className="search-form"
        >

          <label htmlFor="yearDropDown">Pick the Year!</label>
          <select
            name="yearDropDown"
            id="yearDropdown"
            value={userYear}
            onChange={handleUserChoice}
            className="search-drop-down"
          >
            <option value="placeHolder" disabled>
              Pick Year:
            </option>
            {year.map((year) => {
              return <option key={year} value={year}>{year}</option>;
            })}
          </select>
        </form>
      </div>
      <MovieSearch year={userYear} />
    </section>
  );
}

export default Search;

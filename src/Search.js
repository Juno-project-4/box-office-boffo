import { useState, useEffect } from "react";
function Search(props) {
  //this use state gets the year that is being populated in the dorpdown menu
  const [year, setYear] = useState([]);
  //user selceted year. this info is also passed to the api call
  const [userYear, setUserYear] = useState("placeHolder");
  //this usestate is for the button disable if nothing has been inpudted
  const [btnDis, setbtnDis] = useState(true);

  const [textInput, setTextInput] = useState("");

  const handleUserChoice = (e) => {
    //getting the usenpmr value
    setUserYear(e.target.value);
    setbtnDis(false);
    console.log(btnDis);
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
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
        <form
          onSubmit={(e) => {
            props.filter(e, userYear, textInput);
          }}
          className="search-form"
        >
          <label htmlFor="movieSearch">Search Movies!</label>
          <input
            type="text"
            id="movieSearch"
            value={textInput}
            onChange={handleChange}
            className="search-drop-down"
            placeholder="Search Movie Titles"
          />
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
              return <option value={year}>{year}</option>;
            })}
          </select>
          {btnDis === false ? (
            <button className="btn-submit-form" type="submit">
              Submit
            </button>
          ) : (
            <button className="btn-submit-form hidden" type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </section>
  );
}

// const [movies, setMovies] = useState([]);
// const filterApi = (e, year, textInput) => {
//   e.preventDefault();
//   console.log(year);
//   console.log(textInput);
//   const weird = `https://api.themoviedb.org/3/discover/movie?api_key=a95c3731bb8d542ff3503355315d717a&primary_release_date.gte=${year}-05-01&primary_release_date.lte=${year}-09-04`;
//   console.log(weird);
//   fetch(weird)
//     .then((res) => {
//       return res.json();
//     })
//     .then((jsonResponse) => {
//       console.log(jsonResponsenpm);
//       setMovies(jsonResponse.results);
//     });
// };

// return (
//   <div>
//     <Search filter={filterApi} />
//     <section>
//       {movies.map((e) => {
//         return <Data title={e.title} />;
//       })}
//     </section>
//   </div>
// );
// }
export default Search;
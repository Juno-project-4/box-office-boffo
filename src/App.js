import "./App.css";
import Search from "./Search";
import Data from "./Data";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const filterApi = (e, year, textInput) => {
    e.preventDefault();
    console.log(year);
    console.log(textInput);
    const weird = `https://api.themoviedb.org/3/discover/movie?api_key=a95c3731bb8d542ff3503355315d717a&primary_release_date.gte=${year}-05-01&primary_release_date.lte=${year}-09-04`;
    console.log(weird);
    fetch(weird)
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse.results);
        setMovies(jsonResponse.results);
      });
  };

  return (
    <div>
      <Search filter={filterApi} />
      <section>
        {movies.map((e) => {
          return <Data title={e.title} />;
        })}
      </section>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import Search from "./Search";
import FirebaseLists from "./FirebaseLists";

const MovieSearch = () => {
  //const [allMoviesArray, setAllMoviesArray] = useState([]);
  const [movieObj, setMovieObj] = useState([]);
  // const [allMovies, setAllMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState([]);
  const [yearPicked, setYearPicked] = useState("");
  const [isDiplayed, setIsDisplayed] = useState(false);

  const apiKey = "a95c3731bb8d542ff3503355315d717a";
  const searchUrl = "https://api.themoviedb.org/3/discover/movie/?";
  const lessDate = "release_date.lte";
  const greatDate = "release_date.gte";

  //these will need to have the year replaced by a prop passed into this component that contains the year selected by the user
  const lessYear = `${yearPicked}-09-04`;
  const greatYear = `${yearPicked}-05-01`;

  const url = new URL(searchUrl);

  const numArray = [];

  const apiCall = (e, year) => {
    e.preventDefault();

    setYearPicked(year);
    url.search = new URLSearchParams({
      api_key: apiKey,
      [lessDate]: `${year}-09-04`,
      [greatDate]: `${year}-05-01`,
      include_adult: "false",
      include_video: "false",
    });

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => {
        setMovieObj(jsonResponse.results);
        for (let i = 0; i < 20; i++) {
          numArray.push(i);
        }
        setNumOfPages(numArray);
      });
    setIsDisplayed(true);
    console.log(isDiplayed);
  };

  const getPage = (pageNum) => {
    url.search = new URLSearchParams({
      api_key: apiKey,
      [lessDate]: lessYear,
      [greatDate]: greatYear,
      page: pageNum,
    });
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => {
        setMovieObj(jsonResponse.results);
      });
  };

  return (
    <div>
      <div className="wrapper"></div>
      <Search apiCall={apiCall} />

      <FirebaseLists
        firstSet={movieObj}
        display={isDiplayed}
        pages={numOfPages}
        getPage={getPage}
      />
    </div>
  );
};

export default MovieSearch;

// need to make a call then display the first page of results
// after that call the page numbers will be displayed
//but need to remove the first page and not redner under it

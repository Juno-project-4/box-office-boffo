import { useState, useEffect } from "react";
import DisplayMovie from "./DisplayMovie";
import Search from "./Search";
import FirebaseLists from "./FirebaseLists";
import Modal from "./Modal";
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
  //THINGS
  //on year select do initial api call, display initial 20 movies on page, do second api call to get all remaining movies and store in an array
  //allow user to search array for specific title and render that array to page, allow user to select a page number, do api call for that specific page and display on page

  //search allMoviesArray for a movie title that matches input
  //for(i < arraylength) { if input == array[i].title} display that movie

  //on user search call api like below and display results

  useEffect(() => {
    //     for(let i = 1; i <= numOfPages.length; i++) {
    //         url.search = new URLSearchParams({
    //             api_key: apiKey,
    //             [lessDate]: lessYear,
    //             [greatDate]: greatYear,
    //             page: [i]
    //         });
    //         fetch(url).then( (res) => {
    //             return res.json();
    //         }).then((jsonResponse) => {
    //             allMoviesArray.push(jsonResponse);
    //             if(allMoviesArray.length === jsonResponse.total_pages) {
    //                 setAllMovies(allMoviesArray);
    //             }
    //         })
    //     }
    // });
  }, []);

  return (
    <div>
      <Search apiCall={apiCall} />

      <div>
        <FirebaseLists firstSet={movieObj} display={isDiplayed} />
      </div>
      {numOfPages.map((num) => {
        return (
          <button
            key={num}
            onClick={() => {
              getPage(num + 1);
              setIsDisplayed(false);
              console.log(isDiplayed);
            }}
          >
            {num + 1}
          </button>
        );
      })}
    </div>
  );
};

export default MovieSearch;

// need to make a call then display the first page of results
// after that call the page numbers will be displayed
//but need to remove the first page and not redner under it

import { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase.js";
import results from "./resultsExample.js";

function App() {
    // useEffect(() => {
    //     const searchUrl = "https://api.themoviedb.org/3/discover/movie";
    //     const apiKey = "a95c3731bb8d542ff3503355315d717a";
    //     const firstReleasedDate = `primary_release_date.gte`;
    //     const secondReleasedDate = `primary_release_date.lte`;
    //     const apiFunction = (firstYear, secondYear, page) => {
    //         const url = new URL(searchUrl);
    //         url.search = new URLSearchParams({
    //             api_key: apiKey,
    //             [firstReleasedDate]: `${firstYear}-05-01`,
    //             [secondReleasedDate]: `${secondYear}-09-04`,
    //             page: page,
    //         });
    //         return url;
    //     };

    //     fetch(apiFunction("1980", "1980", "1"))
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((jsonResponse) => {
    //             const arrayOfAllPages = [];
    //             for (let i = 1; i <= jsonResponse.total_pages; i++) {
    //                 fetch(apiFunction("1980", "1980", i))
    //                     .then((res) => {
    //                         return res.json();
    //                     })
    //                     .then((jsonResponse) => {
    //                         arrayOfAllPages.push(jsonResponse.results);
    //                         if (
    //                             arrayOfAllPages.length ===
    //                             jsonResponse.total_pages
    //                         ) {
    //                             const arr = [];
    //                             arrayOfAllPages.map((array) => {
    //                                 array.map((data) => {
    //                                     arr.push(data.release_date);
    //                                 });
    //                             });
    //                             console.log(arr);
    //                         }
    //                     });
    //             }
    //         });
    // }, []);

    // const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     const searchUrl = "https://api.themoviedb.org/3/search/movie";
    //     const apiKey = "a95c3731bb8d542ff3503355315d717a";

    //     // API call function
    //     const movieSearch = (year, page) => {
    //         const url = new URL(searchUrl);
    //         url.search = new URLSearchParams({
    //             api_key: apiKey,
    //             query: "love",
    //             primary_release_year: year,
    //             page: page,
    //         });
    //         return url;
    //     };
    //     // Call the API to get the data with default page 1
    //     fetch(movieSearch(2000, 1))
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((jsonResponse) => {
    //             // Create an empty array to contain the data array from all of the pages
    //             const arrayOfAllPages = [];
    //             // Get the total pages from the first API to loop each page of data
    //             for (let i = 1; i <= jsonResponse.total_pages; i++) {
    //                 fetch(movieSearch(2000, i))
    //                     .then((res) => {
    //                         return res.json();
    //                     })
    //                     .then((jsonResponse) => {
    //                         // Push the data array of each page into arrayOfAllPages
    //                         arrayOfAllPages.push(jsonResponse.results);
    //                         // Test if the array have all of the pages after the loop
    //                         if (
    //                             arrayOfAllPages.length ===
    //                             jsonResponse.total_pages
    //                         ) {
    //                             // Passing the year to create the condition and test if the release date of the movie in the range of summer period
    //                             const selectYear = (year) => {
    //                                 console.log(arrayOfAllPages.length);
    //                                 const newArr = [];
    //                                 arrayOfAllPages.map((array) => {
    //                                     console.log(array.length);

    //                                     // filter the array to get only the movies in the summer period of that year
    //                                     array.filter((dataObj) => {
    //                                         // const now = new Date();
    //                                         const releasedDate = new Date(
    //                                             dataObj.release_date
    //                                         );
    //                                         const newReleasedDate1 = new Date(
    //                                             `${year}-05-01`
    //                                         );
    //                                         const newReleasedDate2 = new Date(
    //                                             `${year}-09-04`
    //                                         );

    //                                         if (
    //                                             releasedDate >=
    //                                                 newReleasedDate1 &&
    //                                             releasedDate <= newReleasedDate2
    //                                         ) {
    //                                             newArr.push(dataObj);
    //                                             setMovies(dataObj);
    //                                             // console.log(
    //                                             //     `Title: ${dataObj.title}`,
    //                                             //     `- ${
    //                                             //         releasedDate < now
    //                                             //             ? "Released"
    //                                             //             : "Release"
    //                                             //     } date: ${
    //                                             //         dataObj.release_date
    //                                             //     }`
    //                                             // );
    //                                         }
    //                                     });
    //                                     console.log(newArr);
    //                                 });
    //                             };
    //                             selectYear(2000);
    //                         }
    //                     });
    //             }
    //         });
    // }, []);

    const [list, setList] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(results);
    }, []);

    const handleAdd = (props) => {
        const dbRef = firebase.database().ref();
        const movie = {
            title: props.title,
            date: props.release_date,
        };
        dbRef.push(movie);
    };

    const handleRemove = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
    };

    useEffect(() => {
        // Here we create a variable that holds a reference to our database
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            //  Create a new variable to store the new state that we want to introduce to out app
            const newState = [];
            // store the response from our database
            const data = response.val();
            for (let key in data) {
                newState.push({
                    key: key,
                    movie: data[key],
                });
            }
            setList(newState);
        });
    }, []);

    return (
        <div>
            <div className="search-container">
                <h2>Searched Movies List</h2>
                <ul className="search-list">
                    {movies.map((result, index) => {
                        return (
                            <li key={index}>
                                <p>{result.title}</p>
                                <div>
                                    <button onClick={() => handleAdd(result)}>
                                        Add
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {list.length !== 0 ? (
                <div className="prediction-container">
                    <h2>Prediction List of Summer Movie</h2>
                    <ul className="prediction-list">
                        {list.map((mov) => {
                            return (
                                <li key={mov.key}>
                                    <p>{mov.movie.title}</p>
                                    <button
                                        onClick={() => handleRemove(mov.key)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default App;

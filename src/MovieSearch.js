import { useState, useEffect } from "react";
import SearchedMovies from "./SearchedMovies";

const MovieSearch = (props) => {
    const [movieObj, setMovieObj] = useState([]);
    const [numOfPages, setNumOfPages] = useState([]);

    const apiKey = "a95c3731bb8d542ff3503355315d717a";
    const searchUrl = "https://api.themoviedb.org/3/discover/movie/?";
    const lessDate = "release_date.lte";
    const greatDate = "release_date.gte";

    //these will need to have the year replaced by a prop passed into this component that contains the year selected by the user
    const lessYear = `${props.year}-09-04`;
    const greatYear = `${props.year}-05-01`;

    const url = new URL(searchUrl);

    const numArray = [];

    useEffect(() => {
        url.search = new URLSearchParams({
            api_key: apiKey,
            [lessDate]: lessYear,
            [greatDate]: greatYear,
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
    }, [props.year]);

    // const getPage = (pageNum) => {
    //   url.search = new URLSearchParams({
    //     api_key: apiKey,
    //     [lessDate]: lessYear,
    //     [greatDate]: greatYear,
    //     page: pageNum,
    //   });
    //   fetch(url)
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((jsonResponse) => {
    //       setMovieObj(jsonResponse.results);
    //     });
    // };

    return (
        <div>
            <div className="wrapper">
                <SearchedMovies movies={movieObj} />
            </div>
        </div>
    );
};
export default MovieSearch;

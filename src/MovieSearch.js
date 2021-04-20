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
                for (let i = 1; i < 21; i++) {
                    numArray.push(i);
                }
                setNumOfPages(numArray);
            });
    }, [props.year]);

    const handleClick = (pageNum) => {
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
                const newArray = [];
                jsonResponse.results.filter((movies) => {
                    if (movies.poster_path !== null) {
                        newArray.push(movies);
                    }
                });
                setMovieObj(newArray);
            });
    };

    return (
        <div>
            <div className="wrapper">
                {movieObj.length !== 0 ? (
                    <div>
                        {numOfPages.map((page) => {
                            return (
                                <button
                                    key={page}
                                    onClick={() => handleClick(page)}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>
                ) : null}

                <SearchedMovies movies={movieObj} />
            </div>
        </div>
    );
};
export default MovieSearch;

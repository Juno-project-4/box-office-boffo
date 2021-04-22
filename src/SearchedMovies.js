import FirebaseLists from "./FirebaseLists";

import { Link } from "react-router-dom";

const SearchedMovies = (props) => {
    return (
        <>
            <div className="search-container">
                {props.movies.length === 0 ? (
                    <h2>
                        Please select a specific year to see the list of summer
                        movies!
                    </h2>
                ) : (
                    <div className="searched-movies-list">
                        {props.movies.map((individualMovie) => {
                            return (
                                <div
                                    key={individualMovie.id}
                                    className="movie-container"
                                >
                                    <div>
                                        <Link
                                            to={`/movie/${individualMovie.id}`}
                                            aria-label="Go to the movie detail"
                                        >
                                            <img
                                                src={`http://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`}
                                                alt={
                                                    individualMovie.original_title
                                                }
                                            />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <FirebaseLists />
        </>
    );
};

export default SearchedMovies;

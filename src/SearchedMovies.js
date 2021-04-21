import FirebaseLists from "./FirebaseLists";

import { Link } from "react-router-dom";

const SearchedMovies = (props) => {
    return (
        <>
            <div className="search-container">
                <h2>Movies</h2>
                <h4>
                    Summer Movies is an app that lets users compete with friends
                    in summer movie pools by predicting the top 10 grossing
                    movies for a particular summer!
                </h4>
                <div className="search-list">
                    {props.movies.map((individualMovie) => {
                        return (
                            <div key={individualMovie.id} className="column">
                                <div>
                                    <Link
                                        to={`/movie/${individualMovie.id}`}
                                        aria-label="Go to the movie detail"
                                    >
                                        <img
                                            src={`http://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`}
                                            alt={individualMovie.original_title}
                                        />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <FirebaseLists />
        </>
    );
};

export default SearchedMovies;

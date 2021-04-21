import FirebaseLists from "./FirebaseLists";
import firebase from "./firebase";

const SearchedMovies = (props) => {
    const selectMovie = (title) => {
        const dbRef = firebase.database().ref();
        dbRef.push(title);
    };

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
                                    <img
                                        src={`http://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`}
                                        alt={individualMovie.original_title}
                                        onClick={() => {
                                            selectMovie(individualMovie);
                                        }}
                                    />
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

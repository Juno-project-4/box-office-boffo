import {useState, useEffect} from 'react'
import FirebaseLists from './FirebaseLists';
import firebase from './firebase';


const SearchedMovies = (props) => {

  const [selectedMovie, setSelectedMovie] = useState({});

  const selectMovie = (title) => {
    setSelectedMovie(title);

  }

  return (
    <div className="search-container">
      <h2>Movies</h2>
      <div className="search-list">
        {props.movies.map((individualMovie) => {
          return (
            <div key={individualMovie.id} className="column">
              <div>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${individualMovie.poster_path}`}
                  alt={individualMovie.original_title}
                  onClick={() => {selectMovie(individualMovie)}}
                />
              </div>
            </div>
          );
        })}
      </div>
      <FirebaseLists selectedMovie={selectedMovie} />
    </div>
  );
};

export default SearchedMovies;

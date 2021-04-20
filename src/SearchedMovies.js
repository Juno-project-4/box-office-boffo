const SearchedMovies = ({ handleAdd, firstSet }) => {
  console.log(firstSet);
  return (
    <div className="search-container">
      <h2>Movies</h2>
      <div className="search-list">
        {firstSet.map((result, index) => {
          return (
            <div className="column">
              <div>
                <img
                  src={`http://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt={result.original_title}
                />
              </div>
              <div>
                <button onClick={() => handleAdd(result)}>Add</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchedMovies;

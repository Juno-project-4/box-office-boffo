const SearchedMovies = ({ movies, handleAdd, firstSet, display }) => {
  return (
    <div className="search-container">
      <h2>Search them moveis</h2>
      <ul className="search-list">
        {firstSet.map((result, index) => {
          return (
            <div>
              {display === false ? null : (
                <li key={index}>
                  <p>{result.title}</p>
                  <div>
                    <button onClick={() => handleAdd(result)}>Add</button>
                  </div>
                </li>
              )}
            </div>
          );
        })}
      </ul>

      <ul className="search-list">
        {movies.map((result, index) => {
          return (
            <div>
              {display === false ? (
                <li key={index}>
                  <p>{result.title}</p>
                  <div>
                    <button onClick={() => handleAdd(result)}>Add</button>
                  </div>
                </li>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchedMovies;

const SearchedMovies = ({ handleAdd, firstSet }) => {
  return (
    <div className="search-container">
      <h2>Search them moveis</h2>
      <ul className="search-list">
        {firstSet.map((result, index) => {
          return (
            <div className="column">
              <li key={index}>
                <p>{result.title}</p>

                <button onClick={() => handleAdd(result)}>Add</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchedMovies;

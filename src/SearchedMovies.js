const SearchedMovies = ({ movies, handleAdd }) => {
    return (
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
    );
};

export default SearchedMovies;

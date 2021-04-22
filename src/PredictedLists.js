const PredictedLists = ({ predictedLists, handleDelete, sum }) => {
    return (
        <div className="prediction-wrapper">
            {predictedLists.map((lists) => {
                return (
                    <div key={lists.key} className="prediction-container">
                        <h2>Summer Movie List</h2>
                        <ol>
                            {lists.list.map((mov) => {
                                return (
                                    <li key={mov.key}>
                                        <p>{mov.movie.title}</p>
                                    </li>
                                );
                            })}
                            <p>Total revenue of selected movies: {sum}</p>
                        </ol>
                        <button onClick={() => handleDelete(lists.key)}>
                            Delete List!
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default PredictedLists;

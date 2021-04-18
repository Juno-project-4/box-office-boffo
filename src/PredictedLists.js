const PredictedLists = ({ predictedLists, handleDelete }) => {
    return (
        <div>
            {predictedLists.map((lists) => {
                return (
                    <div key={lists.key} className="prediction-container">
                        <h2>Summer Movie List</h2>
                        <ul>
                            {lists.list.map((mov) => {
                                return (
                                    <li key={mov.key}>
                                        <p>{mov.movie.title}</p>
                                    </li>
                                );
                            })}
                        </ul>
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

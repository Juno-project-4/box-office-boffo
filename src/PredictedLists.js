const PredictedLists = ({ predictedLists, handleDelete, sum }) => {
    predictedLists.map((lists) => {
        lists.list.sort((mov1, mov2) => {
            return mov2.movie.revenue - mov1.movie.revenue;
        });
    });

    return (
        <div className="prediction-wrapper">
            {predictedLists.map((lists) => {
                return (
                    <div key={lists.key} className="prediction-container">
                        <h2>Summer Movie List</h2>
                        <ol>
                            {lists.list.map((mov) => {
                                return <li key={mov.key}>{mov.movie.title}</li>;
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

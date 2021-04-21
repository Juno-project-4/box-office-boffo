const SelectedList = ({ list, handleRemove, handleSave }) => {
    return (
        <>
            {list.length !== 0 ? (
                <div className="prediction-container">
                    <h2>Prediction List of Summer Movie</h2>
                    <ol className="prediction-list">
                        {list.map((mov, index) => {
                            return (
                                <li key={mov.key}>
                                    {index + 1}. {mov.movie.title}
                                    <button
                                        onClick={() => handleRemove(mov.key)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            );
                        })}
                    </ol>
                    <button onClick={handleSave}>Save the list!</button>
                </div>
            ) : null}
        </>
    );
};

export default SelectedList;

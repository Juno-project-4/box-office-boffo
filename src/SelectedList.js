const SelectedList = ({ list, savedList, handleRemove, handleSave }) => {
    return (
        <>
            {list.length !== 0 ? (
                <div className="prediction-container">
                    <h2>Prediction List of Summer Movie</h2>
                    {savedList ? (
                        <>
                            <ul className="prediction-list">
                                {list.map((mov) => {
                                    return (
                                        <li key={mov.key}>
                                            <p>{mov.movie.title}</p>
                                            <button
                                                onClick={() =>
                                                    handleRemove(mov.key)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <button onClick={handleSave}>Save the list!</button>
                        </>
                    ) : null}
                </div>
            ) : null}
        </>
    );
};

export default SelectedList;

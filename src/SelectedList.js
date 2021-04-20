const SelectedList = ({ list, handleRemove, handleSave }) => {
  return (
    <>
      {list.length > 10 ? (
        <div className="prediction-container">
          <h2>Prediction List of Summer Movie</h2>
          <ol className="prediction-list">
            {list.map((mov, index) => {
              return (
                <li key={mov.key}>
                  <p>
                    {index + 1}. {mov.movie.title}
                  </p>
                  <button onClick={() => handleRemove(mov.key)}>Remove</button>
                </li>
              );
            })}
          </ol>
          <h3>
            You have chosen more than 10 movies! Please remove your selected
            movies to save the list!
          </h3>
        </div>
      ) : list.length !== 0 ? (
        <div className="prediction-container">
          <h2>Prediction List of Summer Movie</h2>
          <ol className="prediction-list">
            {list.map((mov, index) => {
              return (
                <li key={mov.key}>
                  {index + 1}. {mov.movie.title}
                  <button onClick={() => handleRemove(mov.key)}>Remove</button>
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

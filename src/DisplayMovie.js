const DisplayMovie = (props) => {
  return (
    <div>
      {props.firstSet.map((e) => {
        return (
          <div>
            {props.display === true ? (
              <p className="hidden">{e.title}</p>
            ) : (
              <p>{e.title}</p>
            )}
          </div>
        );
      })}
      <div>
        {props.movie.map((titles) => {
          return <h4>{titles.title}</h4>;
        })}
      </div>
    </div>
  );
};

export default DisplayMovie;

const ApiPages = (props) => {
  return props.pages.map((num) => {
    return (
      <button
        key={num}
        onClick={() => {
          props.getPage(num + 1);
        }}
      >
        {num + 1}
      </button>
    );
  });
};

export default ApiPages;

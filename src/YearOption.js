import { useState, useEffect } from "react";
function YearOption(props) {
  const [year, setYear] = useState([]);
  const [userYear, setUserYear] = useState("placeHolder");
  const [btnDis, setbtnDis] = useState(true);

  const handleUserChoice = (e) => {
    setUserYear(e.target.value);
    setbtnDis(false);
    console.log(btnDis);
  };

  useEffect(() => {
    //CREDIT THIS SOURCE https://renatello.com/javascript-array-of-years/
    const max = new Date().getFullYear();
    const min = max - "20";
    const years = [];

    for (let i = max; i >= min; i--) {
      years.push(i.toString());
      setYear(years);
    }
  }, []);

  return (
    <form
      onSubmit={(e) => {
        props.filter(e, userYear);
      }}
    >
      <label htmlFor="year">Pick the year!</label>
      <select
        name="yearDropDown"
        id="yearDropdown"
        value={userYear}
        onChange={handleUserChoice}
      >
        <option value="placeHolder" disabled>
          Pick one:
        </option>
        {year.map((year) => {
          return <option value={year}>{year}</option>;
        })}
      </select>
      <button type="submit" disabled={btnDis}>
        click
      </button>
    </form>
  );
}

export default YearOption;

import { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase.js";
import resultsExample from "./resultsExample.js";

function App() {
    const [list, setList] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(resultsExample);
    }, []);

    const handleAdd = (props) => {
        const dbRef = firebase.database().ref();
        const movie = {
            title: props.title,
            date: props.release_date,
        };
        dbRef.push(movie);
    };

    const handleRemove = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
    };

    useEffect(() => {
        // Here we create a variable that holds a reference to our database
        const dbRef = firebase.database().ref();
        dbRef.on("value", (response) => {
            //  Create a new variable to store the new state that we want to introduce to out app
            const newState = [];
            // store the response from our database
            const data = response.val();
            for (let key in data) {
                newState.push({
                    key: key,
                    movie: data[key],
                });
            }
            setList(newState);
        });
    }, []);

    return (
        <div>
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
            {list.length !== 0 ? (
                <div className="prediction-container">
                    <h2>Prediction List of Summer Movie</h2>
                    <ul className="prediction-list">
                        {list.map((mov) => {
                            return (
                                <li key={mov.key}>
                                    <p>{mov.movie.title}</p>
                                    <button
                                        onClick={() => handleRemove(mov.key)}
                                    >
                                        Remove
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default App;

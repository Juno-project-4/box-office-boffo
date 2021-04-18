import { useEffect, useState } from "react";
import "./App.css";
import SearchedMovies from "./SearchedMovies.js";
import SelectedList from "./SelectedList";
import PredictedLists from "./PredictedLists";
import firebase from "./firebase.js";
// Imported fake data to test the app
import resultsExample from "./resultsExample.js";

function App() {
    // Updating the list of searched movies
    const [movies, setMovies] = useState([]);
    // Updating the list movies the user want to add to the prediction list
    const [list, setList] = useState([]);
    // Updating the final predicted list of summer movies
    const [predictedLists, setPredictedLists] = useState([]);
    // Updating the toggle clicking "Save the list" button
    const [savedList, setSavedList] = useState(true);

    useEffect(() => {
        // code here for fetching data from API call
        // resultsExample is a fake array of data
        setMovies(resultsExample);
    }, []);

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
            // Updating the list of selected movies
            setList(newState);
        });
    }, []);

    useEffect(() => {
        // Reference the prediction object from Firebase
        const dbRef = firebase.database().ref("prediction");
        dbRef.on("value", (res) => {
            const data = res.val();
            const newState = [];
            for (let key in data) {
                newState.push({
                    key: key,
                    list: data[key],
                });
            }
            // Updating the list of final predicted movies
            setPredictedLists(newState);
        });
    }, []);

    // Add button function
    const handleAdd = (props) => {
        const dbRef = firebase.database().ref();
        const movie = {
            title: props.title,
            date: props.release_date,
        };
        dbRef.push(movie);
    };

    // Remove button function
    const handleRemove = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
    };

    // "Save the list" button function
    const handleSave = () => {
        // Toggle the status of  "Save the list" button
        if (savedList) setSavedList(!savedList);
        const dbRef = firebase.database().ref("prediction").push();
        dbRef.set(list);
    };

    const handleDelete = (key) => {
        const dbRef = firebase.database().ref("prediction");
        dbRef.child(key).remove();
    };

    return (
        <div>
            <SearchedMovies movies={movies} handleAdd={handleAdd} />
            <SelectedList
                list={list}
                savedList={savedList}
                handleRemove={handleRemove}
                handleSave={handleSave}
            />
            <PredictedLists predictedLists={predictedLists} handleDelete={handleDelete}/>
        </div>
    );
}

export default App;

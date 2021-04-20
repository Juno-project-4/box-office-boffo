import "./App.css";
import { useEffect, useState } from "react";
import firebase from "./firebase.js";

import SearchedMovies from "./SearchedMovies.js";
import SelectedList from "./SelectedList";
import PredictedLists from "./PredictedLists";
import Modal from "./Modal.js";

// Imported fake data to test the app
import resultsExample from "./resultsExample.js";

const FirebaseLists = ({ firstSet, display }) => {
  // Updating the list of searched movies
  const [movies, setMovies] = useState([]);
  // Updating the list movies the user want to add to the prediction list
  const [list, setList] = useState([]);
  // Updating the final predicted list of summer movies
  const [predictedLists, setPredictedLists] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("click");
    setShowModal((open) => !open);
  };
  //   useEffect(() => {
  //     // code here for fetching data from API call
  //     // resultsExample is a fake array of data
  //
  //   }, []);

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
      // Create a copy of the array of objects from Firebase to filter the object with "prediction" key
      // Update the list of selected movies
      const copyNewState = [...newState];
      copyNewState.filter((obj) => {
        if (obj.key === "prediction") {
          const filteredNewState = copyNewState.slice(
            0,
            copyNewState.length - 1
          );
          // Updating the list of selected movies
          setList(filteredNewState);
        } else {
          setList(copyNewState);
        }
      });
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
    if (list.length === 1) {
      setList([]);
    }
  };

  // "Save the list" button function
  const handleSave = () => {
    if (list.length < 10) {
      alert("Please select 10 movies to save the list");
    } else {
      // Toggle the status of  "Save the list" button
      const dbRef = firebase.database().ref("prediction").push();
      dbRef.set(list);
      // Remove the selected list of movie from Firebase when click "Save the list" button
      const dbFirebase = firebase.database().ref();
      list.map((obj) => dbFirebase.child(obj.key).remove());
    }
  };

  // Delete button function to remove the final prediction list of movie
  const handleDelete = (key) => {
    const dbRef = firebase.database().ref("prediction");
    dbRef.child(key).remove();
  };

  return (
    <div>
      <button onClick={openModal} className="button">
        Prediction List
      </button>
      <Modal
        showModal={showModal}
        modalValue={setShowModal}
        list={list}
        handleRemove={handleRemove}
        handleSave={handleSave}
      />

      <SearchedMovies
        handleAdd={handleAdd}
        firstSet={firstSet}
        display={display}
      />

      <SelectedList
        list={list}
        handleRemove={handleRemove}
        handleSave={handleSave}
      />

      <PredictedLists
        predictedLists={predictedLists}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default FirebaseLists;

import PredictedLists from "./PredictedLists";
import { useEffect, useState } from "react";
import firebase from "./firebase.js";

const SelectedList = ({ list, handleRemove, handleSave }) => {
    const [predictedLists, setPredictedLists] = useState([]);
    const [sum, setSum] = useState();

    const totalRevenue = () => {
        let temp = 0;
        list.forEach((movie) => {
            temp += movie.movie.revenue;
        });
        setSum(temp);
    };

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

    const handleDelete = (key) => {
        const confirmDelete = window.confirm(
            "Are you sure to delete the list?"
        );
        if (confirmDelete) {
            const dbRef = firebase.database().ref("prediction");
            dbRef.child(key).remove();
        }
    };

    return (
        <div>
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
                    <button
                        onClick={() => {
                            handleSave();
                            totalRevenue();
                        }}
                    >
                        Save the list!
                    </button>
                </div>
            ) : null}
            <PredictedLists
                predictedLists={predictedLists}
                handleDelete={handleDelete}
                sum={sum}
            />
        </div>
    );
};

export default SelectedList;

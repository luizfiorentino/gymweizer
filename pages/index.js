import React, { useState } from "react";

export default function index() {
  const [pageMode, setPageMode] = useState("create");
  const [selectedExercises, setSelectedExercises] = useState({});

  const exerciseBank = [
    {
      group: "chest",
      exercises: [
        "bench press",
        "incline dumbbell press",
        "dumbbell chest fly",
        "chest fly",
        "decline bench press",
        "dumbbell chest press",
        "pushup",
        "dumbbell flyes",
        "dumbbell bench press",
        "dips",
        "cable crossover",
        "incline pushup",
        "decline pushup",
        "traveling plank",
      ],
    },
    {
      group: "back",
      exercises: [
        "lat pulldown",
        "one arm dumbbell row",
        "pull-ups",
        "cable row",
        "seated row",
        "dumbbell row",
        "reverse fly",
        "barbell row",
        "T-bar row",
        "Bent-over dumbbell row",
        "bent over barbell row",
        "inverted row",
        "trap-bar deadlift",
        "dumbbell shrugs",
      ],
    },
  ];

  const handleCheckboxChange = (exercise) => {
    //receives a string and add it to selectedExercises making it true or false
    setSelectedExercises((prev) => ({
      ...prev,
      [exercise]: !prev[exercise],
    }));
  };

  const addExercises = () => {
    //filters all objects with value true from selectedExercises
    const selectedList = Object.keys(selectedExercises).filter(
      (exercise) => selectedExercises[exercise]
    );
    if (!selectedList.length) {
      //if the list is empty, just returns
      return;
    }
    //reset the list of exercises in case user ticks and unticks some item
    setSelectedExercises(selectedList);
    setPageMode("view");
  };

  const removeExercises = () => {
    //sets list of exercises to empty, and swtiches page mode
    setSelectedExercises({});
    setPageMode("create");
  };
  console.log(exerciseBank);

  return (
    <div>
      <h1>Welcome to GymWeizer</h1>
      {pageMode === "view" && (
        <div>
          <h2>This is your set</h2>
        </div>
      )}
      {/* {selectedExercises.length &&
        selectedExercises.map((exercise, index) => (
          <div key={index}>
            <ul>
              <li>{exercise["group"]}</li>
            </ul>
          </div>
        ))} */}
      {pageMode === "create" && (
        <div>
          <h2>Create your set</h2>
        </div>
      )}
      {pageMode !== "view" &&
        exerciseBank &&
        exerciseBank.map((exercise, index) => (
          <div key={index}>
            <div>
              {/* <input
                type="checkbox"
                id={`exercise-${index}`}
                value={exercise["group"]}
                checked={!!selectedExercises[exercise]}
                onChange={() => handleCheckboxChange(exercise)}
              /> */}
              <h2>{exercise["group"]}</h2>
              {exercise["exercises"].map((exercise, subindex) => (
                <li>{exercise}</li>
              ))}
              {/* <label htmlFor="exercises">{exercise}</label> */}
            </div>
          </div>
        ))}
      <div>
        <button
          onClick={pageMode === "create" ? addExercises : removeExercises}
        >
          {pageMode === "create" ? "add set" : "reset"}
        </button>
      </div>
    </div>
  );
}

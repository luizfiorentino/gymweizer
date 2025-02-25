import React, { useState } from "react";

export default function index() {
  const [pageMode, setPageMode] = useState("create");
  const [selectedExercises, setSelectedExercises] = useState({});

  const exerciseBank = [
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
  ];

  const handleCheckboxChange = (exercise) => {
    setSelectedExercises((prev) => ({
      ...prev,
      [exercise]: !prev[exercise],
    }));
  };

  const addExercises = () => {
    const selectedList = Object.keys(selectedExercises).filter(
      (exercise) => selectedExercises[exercise]
    );
    if (!selectedList.length) {
      return;
    }
    setSelectedExercises(selectedList);
    setPageMode("view");
  };

  const removeExercises = () => {
    setSelectedExercises({});
    setPageMode("create");
  };
  console.log(selectedExercises, addExercises);

  return (
    <div>
      <h1>Welcome to GymWeizer</h1>
      <h2>Choose an existing training</h2>
      {selectedExercises.length &&
        selectedExercises.map((exercise, index) => (
          <div key={index}>
            <li>{exercise}</li>
          </div>
        ))}
      <h2>Or create one</h2>
      {pageMode !== "view" &&
        exerciseBank &&
        exerciseBank.map((exercise, index) => (
          <div key={index}>
            <div>
              <input
                type="checkbox"
                id={`exercise-${index}`}
                value={exercise}
                checked={!!selectedExercises[exercise]}
                onChange={() => handleCheckboxChange(exercise)}
              />
              <label for="exercises">{exercise}</label>
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

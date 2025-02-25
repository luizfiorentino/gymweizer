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

  return (
    <div>
      <h1>Welcome to GymWeizer</h1>
      {selectedExercises.length &&
        selectedExercises.map((exercise, index) => (
          <div key={index}>
            <ul>
              <li>{exercise}</li>
            </ul>
          </div>
        ))}
      {pageMode === "create" && (
        <div>
          <h2>Create your set</h2>
          <p>Select exercises to your training</p>
        </div>
      )}
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
              <label htmlFor="exercises">{exercise}</label>
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

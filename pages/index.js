import React, { use, useEffect, useState } from "react";

export default function index() {
  const exerciseBank = [
    {
      group: "chest",
      exercises: [
        { name: "bench press", chosen: false },
        { name: "incline dumbbell press", chosen: false },
        { name: "dumbbell chest fly", chosen: false },
        { name: "chest fly", chosen: false },
        { name: "decline bench press", chosen: false },
        { name: "dumbbell chest press", chosen: false },
        { name: "pushup", chosen: false },
        { name: "dumbbell flyes", chosen: false },
        { name: "dumbbell bench press", chosen: false },
        { name: "dips", chosen: false },
        { name: "cable crossover", chosen: false },
        { name: "incline pushup", chosen: false },
        { name: "decline pushup", chosen: false },
        { name: "traveling plank", chosen: false },
      ],
    },
    {
      group: "back",
      exercises: [
        { name: "lat pulldown", chosen: false },
        { name: "one arm dumbbell row", chosen: false },
        { name: "pull-ups", chosen: false },
        { name: "cable row", chosen: false },
        { name: "seated row", chosen: false },
        { name: "dumbbell row", chosen: false },
        { name: "reverse fly", chosen: false },
        { name: "barbell row", chosen: false },
        { name: "T-bar row", chosen: false },
        { name: "Bent-over dumbbell row", chosen: false },
        { name: "bent over barbell row", chosen: false },
        { name: "inverted row", chosen: false },
        { name: "trap-bar deadlift", chosen: false },
        { name: "dumbbell shrugs", chosen: false },
      ],
    },
  ];
  const [pageMode, setPageMode] = useState("create");
  const [selectedExercises, setSelectedExercises] = useState(exerciseBank);
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    console.log("useEffect called");
    //check all groups every time, if at least one group
    //has a chosen exercise, true, else, false
    let activeMode;
    const addedExercises = selectedExercises.map((group) => {
      if (group.exercises.find((item) => item.chosen)) {
        activeMode = true;
      } else if (!activeMode) {
        activeMode = false;
      }
      setButtonActive(activeMode);
    });
  }, [selectedExercises]);

  const addExercises = () => {
    setPageMode("view");
  };

  const toggleExercise = (groupIndex, exerciseIndex) => {
    setSelectedExercises((prev) => {
      return prev.map((group, gIdx) =>
        gIdx === groupIndex
          ? {
              ...group,
              exercises: group.exercises.map((exercise, eIdx) =>
                eIdx === exerciseIndex
                  ? { ...exercise, chosen: !exercise.chosen }
                  : exercise
              ),
            }
          : group
      );
    });
  };

  const removeExercises = () => {
    setSelectedExercises(exerciseBank);
    setPageMode("create");
  };
  console.log(exerciseBank);

  return (
    <div>
      <h1>Welcome to GymWeizer</h1>
      {pageMode === "view" && (
        <div>
          <h2>This is your set</h2>
          {selectedExercises.length &&
            selectedExercises.map((group, index) => {
              const exercises = group.exercises.filter((item) => item.chosen);
              console.log(exercises);
              if (exercises.length) {
                return (
                  <div key={index}>
                    <h2>{group.group}</h2>
                    <ul>
                      {exercises.map((item, index) => (
                        <li key={item.name}>{item.name}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
            })}
        </div>
      )}

      {pageMode === "create" && (
        <div>
          <h2>Create your set</h2>
          {exerciseBank.length &&
            exerciseBank.map((group, index) => (
              <div key={index}>
                <h3>{group["group"]}</h3>
                {group["exercises"].map((exercise, index2) => (
                  <button
                    key={index2}
                    onClick={() => toggleExercise(index, index2)}
                  >
                    {exercise.name}
                  </button>
                ))}
              </div>
            ))}
        </div>
      )}

      <div>
        <button
          onClick={pageMode === "create" ? addExercises : removeExercises}
          disabled={!buttonActive}
        >
          {pageMode === "create" ? "add set" : "reset"}
        </button>
      </div>
    </div>
  );
}

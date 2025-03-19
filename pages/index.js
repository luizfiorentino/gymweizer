import { NewTodoForm } from "@/NewTodoForm";
import { TodoList } from "@/TodoList";
import React, { useEffect, useState } from "react";

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
    {
      group: "biceps",
      exercises: [
        { name: "concentration curl", chosen: false },
        { name: "machine preacher curl", chosen: false },
        { name: "zottman curl", chosen: false },
        { name: "barbell curls", chosen: false },
        { name: "hammer curl", chosen: false },
        { name: "bicep curl", chosen: false },
        { name: "chin up", chosen: false },
        { name: "EZ bar curl", chosen: false },
        { name: "spider curl", chosen: false },
        { name: "alternate biceps curl", chosen: false },
        { name: "reverse curl", chosen: false },
        { name: "inverted row", chosen: false },
        { name: "incline bumbbell curl", chosen: false },
        { name: "incline curls", chosen: false },
        { name: "band curl", chosen: false },
        { name: "cable bicep curl", chosen: false },
        { name: "alternating incline dumbbell curl", chosen: false },
        { name: "preacher hammer dumbbell curl", chosen: false },
      ],
    },
    {
      group: "triceps",
      exercises: [
        { name: "triceps pushdown", chosen: false },
        { name: "skull crushers", chosen: false },
        { name: "rope pushdowns", chosen: false },
        { name: "tricep dips", chosen: false },
        { name: "tricep extensions", chosen: false },
        { name: "dumbbell lying triceps extension", chosen: false },
        { name: "dumbbell triceps kickback", chosen: false },
        { name: "lying triceps extensions", chosen: false },
        { name: "pushups", chosen: false },
        { name: "close-grip push-up", chosen: false },
        { name: "diamond pushup", chosen: false },
        { name: "cable rope extension", chosen: false },
        { name: "close grip bench press", chosen: false },
        { name: "bodyweight triceps extension", chosen: false },
        { name: "overhead tricep extension", chosen: false },
        { name: "dips", chosen: false },
        { name: "one-arm overhead extension", chosen: false },
        { name: "bench dip", chosen: false },
        { name: "cable kickback", chosen: false },
      ],
    },
    {
      group: "abs",
      exercises: [
        { name: "sit-up", chosen: false },
        { name: "seated ab crunch machine", chosen: false },
        { name: "decline sit-up", chosen: false },
        { name: "dip/leg raise", chosen: false },
        { name: "crunch", chosen: false },
        { name: "plank", chosen: false },
        { name: "V-ups", chosen: false },
        { name: "bicycle crunch", chosen: false },
        { name: "hollow hold", chosen: false },
        { name: "reverse crunch", chosen: false },
        { name: "leg raise", chosen: false },
        { name: "medicine ball slam", chosen: false },
        { name: "barbell ab rollout", chosen: false },
        { name: "exercise ball crunch", chosen: false },
        { name: "hollow rock", chosen: false },
        { name: "navasana", chosen: false },
        { name: "cable crunch", chosen: false },
        { name: "dead bug", chosen: false },
        { name: "butterfly sit up", chosen: false },
        { name: "bird dog exercise", chosen: false },
      ],
    },
    {
      group: "legs",
      exercises: [
        { name: "leg press", chosen: false },
        { name: "leg extension", chosen: false },
        { name: "leg curl", chosen: false },
        { name: "calf raises", chosen: false },
        { name: "back squat", chosen: false },
        { name: "bulgarian split squat", chosen: false },
        { name: "goblet squat", chosen: false },
        { name: "romanian deadlift", chosen: false },
        { name: "glute bridge", chosen: false },
        { name: "dumbbell step up", chosen: false },
        { name: "walking lunge with overhead weight", chosen: false },
        { name: "dumbbell squat", chosen: false },
        { name: "deadlift", chosen: false },
        { name: "dumbbell split squat", chosen: false },
        { name: "lateral lunge", chosen: false },
        { name: "split squats", chosen: false },
        { name: "jump squat", chosen: false },
        { name: "rear foot elevated split squat", chosen: false },
        { name: "isometric calf raise", chosen: false },
        { name: "stiff-legged dumbbell deadlift", chosen: false },
        { name: "dumbbell deadlift", chosen: false },
        { name: "walking lunges", chosen: false },
        { name: "sumo squat", chosen: false },
        { name: "goblet squat", chosen: false },
        { name: "reverse lunge", chosen: false },
        { name: "front squat", chosen: false },
        { name: "hamstring curl", chosen: false },
        { name: "box step up", chosen: false },
        { name: "squats and lunges", chosen: false },
        { name: "standing dumbbell calf raise", chosen: false },
        { name: "rear lunge", chosen: false },
        { name: "stiff-legged deadlift", chosen: false },
        { name: "barbell glute bridge", chosen: false },
        { name: "cyclist squat", chosen: false },
        { name: "step up", chosen: false },
        { name: "front foot elevated split step", chosen: false },
        { name: "rear foot elevated split squat", chosen: false },
        { name: "squat", chosen: false },
        { name: "romanian deadlift with dumbbells", chosen: false },
        { name: "single leg deadlift", chosen: false },
        { name: "side lunge", chosen: false },
        { name: "hip thrust", chosen: false },
        { name: "dumbbell walking lunge", chosen: false },
        { name: "barbell squat", chosen: false },
        { name: "kettlebell swing", chosen: false },
      ],
    },
  ];
  const [pageMode, setPageMode] = useState("create");
  const [selectedExercises, setSelectedExercises] = useState(exerciseBank);
  const [buttonActive, setButtonActive] = useState(false);
  const [setsAndReps, setSetsAndReps] = useState({ sets: 3, repetitions: 10 });
  const [arrayOfSets, setArrayOfSets] = useState([]);
  const [setMode, setSetMode] = useState({
    active: false,
    groupIndex: null,
    exerciseIndex: null,
  });
  const [numberOfSets, setNumberOfSets] = useState(null);
  const [partialSet, setPartialSet] = useState({ reps: 0, weight: 0 });
  console.log(setsAndReps);
  console.log("partialSet", partialSet);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
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
    setSetMode({
      active: true,
      groupIndex: groupIndex,
      exerciseIndex: exerciseIndex,
    });
  };

  const removeExercises = () => {
    setSelectedExercises(exerciseBank);
    setPageMode("create");
  };

  console.log(todos);

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function addTodo(newItem) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }
  const sets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleNumberOfSets = (number) => {
    //console.log("called number", number);
    setNumberOfSets(number);
  };
  //console.log("numberOfSets", numberOfSets);

  const handleNumberSets = (nbsets, exercise) => {
    let subArray = [];
    for (let i = 0; i < nbsets; i++) {
      //console.log("loop...", i, "arrayOfSets", arrayOfSets);
      subArray = [
        ...subArray,
        {
          id: crypto.randomUUID(),
          exercise: exercise,
          setNumber: i + 1,
          reps: 0,
          weight: 0,
        },
      ];
    }
    setArrayOfSets(...arrayOfSets, subArray);
    console.log("called", nbsets);
    //setNumberOfSets(nbsets);
  };
  console.log("arrayOfSets", arrayOfSets);
  const handleSetChange = (value, id, type) => {
    if (type === "reps") {
      const updatedSets = arrayOfSets.map((oneSet) =>
        oneSet.id === id ? { ...oneSet, reps: value } : oneSet
      );
      setArrayOfSets(updatedSets);
    }
    if (type === "weight") {
      const updatedSets = arrayOfSets.map((oneSet) =>
        oneSet.id === id ? { ...oneSet, weight: value } : oneSet
      );
      setArrayOfSets(updatedSets);
    }
  };

  const thisSetReps = (id) => {
    const selectedSet = arrayOfSets.find((set) => set.id === id);
    console.log(selectedSet);
    return selectedSet.id;
  };

  return (
    <div>
      <h1>Welcome to GymWeizer</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      <h2>Sets & Reps </h2>
      <label htmlFor="sets">Select number of sets</label>
      <input
        type="number"
        value={setsAndReps.sets}
        onChange={(e) =>
          setSetsAndReps({ ...setsAndReps, sets: Number(e.target.value) })
        }
      />
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
          <h2>Create your train</h2>
          {exerciseBank.length &&
            exerciseBank.map((group, index) => (
              <div key={index}>
                <h3>{group["group"]}</h3>
                {group["exercises"].map((exercise, index2) => (
                  <>
                    <button
                      key={index2}
                      onClick={() => toggleExercise(index, index2)}
                    >
                      {exercise.name}
                    </button>
                    {setMode.active === true &&
                      setMode.groupIndex === index &&
                      setMode.exerciseIndex === index2 && (
                        <div>
                          <h3>Number of sets</h3>

                          <select
                            name="pets"
                            id="pet-select"
                            onChange={(e) =>
                              handleNumberSets(
                                Number(e.target.value),
                                exercise.name
                              )
                            }
                          >
                            <option value="">--Number of sets--</option>
                            {sets.map((set, index) => {
                              return (
                                <option value={set} key={index}>
                                  {set}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      )}
                    {arrayOfSets.length &&
                    setMode.groupIndex === index &&
                    setMode.exerciseIndex === index2 ? (
                      <>
                        <h2>Sets & Reps</h2>
                        <h3>{exercise.name}</h3>
                      </>
                    ) : (
                      ""
                    )}
                    {arrayOfSets.length > 0 &&
                    setMode.groupIndex === index &&
                    setMode.exerciseIndex === index2
                      ? arrayOfSets.map((set, index) => (
                          <div key={index}>
                            <h3>Set n. {set.setNumber}</h3>

                            <label>Reps</label>
                            <input
                              type="number"
                              value={
                                arrayOfSets.find(
                                  (oneSet) => oneSet.id === set.id
                                )?.reps || ""
                              }
                              onChange={(e) =>
                                handleSetChange(
                                  Number(e.target.value),
                                  set.id,
                                  "reps"
                                )
                              }
                            />
                            <label>Weight</label>
                            <input
                              type="number"
                              value={
                                arrayOfSets.find(
                                  (oneSet) => oneSet.id === set.id
                                )?.weight || ""
                              }
                              onChange={(e) =>
                                handleSetChange(
                                  Number(e.target.value),
                                  set.id,
                                  "weight"
                                )
                              }
                            />
                            <button>Add set</button>
                          </div>
                        ))
                      : ""}
                  </>
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

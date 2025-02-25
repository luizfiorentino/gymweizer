import React from "react";

export default function index() {
  const exerciseBank = [
    "bench press",
    "incline dumbbell press",
    "dumbbell chest fly",
    "bench press",
    "chest fly",
    "decline bench press",
    "dumbbell chest press",
    "pushup",
    "dumbbell flyes",
    "dumbbell besnch press",
    "dips",
    "cable crossover",
    "incline pushup",
    "decline pushup",
    "traveling plank",
  ];
  return (
    <div>
      <h1>Welcome to GymWeizer</h1>
      <h2>Choose an existing training</h2>
      <h2>Or create one</h2>
      {exerciseBank &&
        exerciseBank.map((exercise) => (
          <div>
            <input type="checkbox" value={exercise} label={exercise} />
            <label for="scales">{exercise}</label>
          </div>
        ))}
    </div>
  );
}

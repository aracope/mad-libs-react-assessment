/**
 * App - Main component for the Madlibs game.
 *
 * Renders:
 * - A dropdown to select a story
 * - The final generated madlib story based on user inputs
 *
 * Uses:
 * - useState to manage which story is selected and the user's answers
 * - Conditional rendering to show different stages of the game
 */

import React, { useState } from "react";
import { stories } from "./stories";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import "./App.css";

function App() {
  // Tracks the key of the selected story (e.g., "sci-fi", "fantasy")
  const [storyKey, setStoryKey] = useState("");

  // Stores the user's answers after the form is submitted
  const [answers, setAnswers] = useState(null);

  // Handle change when a story is selected from the dropdown
  const handleSelect = (e) => setStoryKey(e.target.value);

  // Receive the filled answers from the form and store them
  const handleSubmit = (filledAnswers) => setAnswers(filledAnswers);

  // Reset the game state to allow for replaying
  const restart = () => {
    setAnswers(null);
    setStoryKey("");
  };

  // Retrieve the story object (prompts + template) based on current storyKey
  const story = stories[storyKey];

  return (
    <div>
      <h1>Madlibs Game</h1>

      {/* Step 1: Let user choose a story */}
      {!storyKey ? (
        <form>
          <label>Choose a story: </label>
          <select value={storyKey} onChange={handleSelect}>
            <option value="">-- Choose One --</option>
            {Object.keys(stories).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </form>
      ) : !answers ? (
        // Step 2: Show form to collect user inputs
        <MadlibForm prompts={story.prompts} onSubmit={handleSubmit} />
      ) : (
        // Step 3: Display final story with answers plugged in
        <MadlibStory template={story.template} answers={answers} onRestart={restart} />
      )}
    </div>
  );
}

export default App;

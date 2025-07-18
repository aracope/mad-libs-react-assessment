/**
 * MadlibStory - Displays the finished Madlib story and offers a “Restart” button.
 *
 * Props:
 *
 * template: String - The raw story text containing placeholders, e.g. "The {noun} jumped over the {adjective} fence."
 * answers: Object - Key/value pairs that map each placeholder to the user‑supplied word, e.g. { noun: "cat", adjective: "tall" }
 * onRestart : Function - Callback to reset the game in the parent component.
 *
 * How it works:
 * 
 * 1) Iterates over `answers` and replaces every `{key}` in the template with the corresponding value.
 * 2) Renders the completed story in a paragraph.
 * 3) Provides a button to call `onRestart`, which returns the app to the story‑selection screen.
 */

import React from "react";

function MadlibStory({ template, answers, onRestart }) {
  // Build the final story string by replacing each placeholder.
  let storyText = template;
  for (let [key, val] of Object.entries(answers)) {
    // Replace *all* occurrences of a given placeholder
    storyText = storyText.replace(`{${key}}`, val);
  }

  return (
    <div>
      <p>{storyText}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export default MadlibStory;

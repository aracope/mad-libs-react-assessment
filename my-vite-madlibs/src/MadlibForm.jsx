/**
 * MadlibForm - Component for collecting user inputs for a Madlib story.
 *
 * Props:
 * - prompts: Array of strings (e.g., ["noun", "verb", "adjective"])
 * - onSubmit: Function to call when form is submitted with valid data
 *
 * Features:
 * - Dynamically renders one input per prompt
 * - Validates that all inputs have at least 3 characters
 * - Disables submit button until form is complete
 */

import React, { useState } from "react";

function MadlibForm({ prompts, onSubmit }) {
  // Initialize state: an object where each prompt key has an empty string value
  const [formData, setFormData] = useState(() =>
    prompts.reduce((acc, prompt) => ({ ...acc, [prompt]: "" }), {})
  );

  // Determine whether all form fields are filled with at least 3 characters
  const isComplete = Object.values(formData).every(val => val.trim().length >= 3);

  // Handle input changes
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  // On form submission, validate and call onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isComplete) onSubmit(formData);
    else alert("Please fill out all fields with at least 3 characters.");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render an input for each prompt */}
      {prompts.map(prompt => (
        <div key={prompt}>
          <label htmlFor={prompt}>{prompt}: </label>
          <input
            id={prompt}
            name={prompt}
            value={formData[prompt]}
            onChange={handleChange}
            required
            minLength={3} />
        </div>
      ))}
      <button type="submit" disabled={!isComplete}>Submit</button>
    </form>
  );
}

export default MadlibForm;

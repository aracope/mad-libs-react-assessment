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

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Helper to validate input
  const getError = (val) => val.trim().length < 3 ? "Please enter at least 3 characters!" : "";

  // Form is complete if no prompt has an error
  const isComplete = prompts.every(p => !getError(formData[p]));

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
    setTouched(t => ({ ...t, [name]: true }));
  };

  // On form submission, validate and call onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isComplete) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Render an input for each prompt */}
      {prompts.map(prompt => {
        const value = formData[prompt];
        const error = getError(value);
        const showError = (touched[prompt] || submitted) && error;

        return (
          <div key={prompt}>
            <label htmlFor={prompt}>{prompt}: </label>
            <input
              id={prompt}
              name={prompt}
              value={formData[prompt]}
              onChange={handleChange}
              required
              minLength={3}
            />
            {showError && (
              <div style={{ color: "red", fontSize: "0.9rem" }}>{error}
              </div>
            )}
          </div>
        );
      })}
      <button type="submit" disabled={!isComplete}>Submit</button>
    </form >
  );
}


export default MadlibForm;

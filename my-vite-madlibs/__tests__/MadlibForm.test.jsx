import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MadlibForm from "../src/MadlibForm";

const prompts = ["noun", "verb"];

describe("MadlibForm", () => {
    // Test that form inputs are rendered for each prompt
    it("renders inputs for all prompts", () => {
        render(<MadlibForm prompts={prompts} onSubmit={() => { }} />);
        expect(screen.getByLabelText(/noun/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/verb/i)).toBeInTheDocument();
    });

    // Test form submission with valid data
    it("submits form with valid input", () => {
        const mockSubmit = jest.fn();
        render(<MadlibForm prompts={prompts} onSubmit={mockSubmit} />);

        // Simulate user typing into both inputs
        fireEvent.change(screen.getByLabelText(/noun/i), { target: { value: "dog" } });
        fireEvent.change(screen.getByLabelText(/verb/i), { target: { value: "run" } });

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        // Expect the mocked onSubmit handler to be called with form data
        expect(mockSubmit).toHaveBeenCalledWith({ noun: "dog", verb: "run" });
    });

    // Test that submit button is disabled if any input is missing or too short
    it("disables submit if inputs are incomplete", () => {
        render(<MadlibForm prompts={prompts} onSubmit={() => { }} />);
        fireEvent.change(screen.getByLabelText(/noun/i), { target: { value: "hi" } }); // <3 chars
        fireEvent.change(screen.getByLabelText(/verb/i), { target: { value: "" } });   // empty

        const submitButton = screen.getByRole("button", { name: /submit/i });

        // Submit button should be disabled when not all fields are valid
        expect(submitButton).toBeDisabled();
    });
});

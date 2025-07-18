import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MadlibStory from "../src/MadlibStory";

// Sample data to test with
const template = "The {noun} likes to {verb}.";
const answers = { noun: "cat", verb: "jump" };

describe("MadlibStory", () => {
    // Test that the template is filled in correctly with answers
    it("renders filled-in story text", () => {
        render(<MadlibStory template={template} answers={answers} onRestart={() => { }} />);

        // Expect the filled-in story to be displayed
        expect(screen.getByText("The cat likes to jump.")).toBeInTheDocument();
    });

    // Test that the restart button works
    it("calls restart function on button click", () => {
        const mockRestart = jest.fn();
        render(<MadlibStory template={template} answers={answers} onRestart={mockRestart} />);

        // Simulate clicking "Restart" button
        fireEvent.click(screen.getByRole("button", { name: /restart/i }));

        // Verify the restart handler was called
        expect(mockRestart).toHaveBeenCalled();
    });
});
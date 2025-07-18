import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";

// Test the overall flow of the Madlib app
describe("App", () => {
    // Test that the story selector dropdown is rendered
    it("renders the story selection dropdown", () => {
        render(<App />);
        expect(screen.getByLabelText(/choose a story/i)).toBeInTheDocument();
    });

    // Test that selecting a story shows the correct form
    it("allows user to choose story and shows form", () => {
        render(<App />);

        const select = screen.getByLabelText(/choose a story/i);
        fireEvent.change(select, { target: { value: "fantasy" } });

        // After selecting "fantasy", inputs for that story should appear
        expect(screen.getByLabelText(/creature/i)).toBeInTheDocument();
    });

    // Test the full user flow from choosing a story to seeing the story output
    it("runs full flow from select to story render", () => {
        render(<App />);

        // Select the fantasy story
        fireEvent.change(screen.getByLabelText(/choose a story/i), { target: { value: "fantasy" } });

        // Fill out the form fields with valid data
        const inputs = {
            creature: "dragon",
            weapon: "mace",
            magic: "fire",
            adjective: "scaly",
        };

        for (let [key, val] of Object.entries(inputs)) {
            fireEvent.change(screen.getByLabelText(new RegExp(key, "i")), {
                target: { value: val },
            });
        }

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: /submit/i }));

        // Expect the story to include one of the entered values
        expect(screen.getByText(/dragon/i)).toBeInTheDocument();

        // Expect the "Restart" button to appear after submission
        expect(screen.getByRole("button", { name: /restart/i })).toBeInTheDocument();
    });
});

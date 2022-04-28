import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { AllCourses } from "../interfaces/AllCourses-AllDegrees";
describe("Testing everything on the homepage", () => {
    describe("Testing the Select Taken UI", () => {
        beforeEach(() => {
            render(<App />);
        });
        test("Testing to see if we have the printed bux", () => {
            expect(
                screen.getByText(
                    "Please Select The Courses You Have Already Taken"
                )
            ).toBeInTheDocument;
        });
        test("Testing to see if a degree name has been printed", () => {
            expect(screen.getByText(/{AllCourses[0].name}/)).toBeInTheDocument;
        });
        test("Testing to see if taken starts off as false", () => {
            expect(
                screen.getByText(
                    "Please Select The Courses You Have Already Taken"
                )
            ).toBeInTheDocument;
        });
        test("testing to see if there is a checkbox identified with a course name", () => {
            expect(
                screen.getByText(
                    "Please Select The Courses You Have Already Taken"
                )
            ).toBeInTheDocument;
        });
        test("Testing to see if the user can check the check box and change the status of taken", () => {
            expect(
                screen.getByText(
                    "Please Select The Courses You Have Already Taken"
                )
            ).toBeInTheDocument;
        });
        test("Testing to see if changing the status of taken twice gets us back to not taken", () => {
            expect(
                screen.getByText(
                    "Please Select The Courses You Have Already Taken"
                )
            ).toBeInTheDocument;
        });
    });
});

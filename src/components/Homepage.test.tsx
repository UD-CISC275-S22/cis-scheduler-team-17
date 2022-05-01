import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

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
        test("Testing to see if the first degree name has been printed", () => {
            expect(screen.getByText(/EGGG101: Introduction to Engineering/i))
                .toBeInTheDocument;
        });
        test("Testing to see if taken starts off as false", () => {
            expect(
                screen.getByText(
                    /Course Name: EGGG101: Introduction to Engineering Course Credits: 2 ...... Pre Requisite: ...... Taken: ❌/i
                )
            ).toBeInTheDocument;
        });
        test("testing to see if there is a list of checkboxes present on the page", () => {
            const checkboxi: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxi[0].click();
            checkboxi[0].click();
            checkboxi[1].click();
            checkboxi[1].click();
            const length = checkboxi.length;
            checkboxi[length - 1].click();
            checkboxi[length - 1].click();
        });
        test("Testing to see if the user can check the check box and change the status of taken", () => {
            const checkboxes: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxes[0].click();
            screen.getByText(
                /Course Name: EGGG101: Introduction to Engineering Course Credits: 2 ...... Pre Requisite: ...... Taken: ✔️/i
            );
        });
        test("Testing to see if changing the status of taken twice gets us back to not taken", () => {
            const checkboxes: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxes[0].click();
            checkboxes[0].click();
            screen.getByText(
                /Course Name: EGGG101: Introduction to Engineering Course Credits: 2 ...... Pre Requisite: ...... Taken: ✔️/i
            );
            checkboxes[0].click();
            screen.getByText(
                /Course Name: EGGG101: Introduction to Engineering Course Credits: 2 ...... Pre Requisite: ...... Taken: ❌/i
            );
        });
    });
});

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
                    /Course Name: EGGG101: Introduction to Engineering...Taken: ❌/i
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
                /Course Name: EGGG101: Introduction to Engineering...Taken: ✔️/i
            );
        });
        test("Testing to see if changing the status of taken twice gets us back to not taken", () => {
            const checkboxes: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxes[0].click();
            checkboxes[0].click();
            screen.getByText(
                /Course Name: EGGG101: Introduction to Engineering...Taken: ✔️/i
            );
            checkboxes[0].click();
            screen.getByText(
                /Course Name: EGGG101: Introduction to Engineering...Taken: ❌/i
            );
        });
        // these tests are for when/if we decide to print the prerecs inside of the scrolly box
        /* test("checking to see if the taken status for courses with prerecs is intitally not taken", () => {
            screen.getByText(
                /Course Name: CISC181: Introduction to Computer Science II Course Credits: 3 ...... Pre Requisite: CISC108: Introduction To Computer Science 1❌,MATH241: Analytic Geometry and Calculus A❌ ...... Taken: ❌/i
            );
        });
        test("checking to see if the taken status of prerequisites updates when clicked to taken", () => {
            const checkboxes: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxes[1].click();
            checkboxes[2].click();
            screen.getByText(
                /Course Name: CISC181: Introduction to Computer Science II Course Credits: 3 ...... Pre Requisite: CISC108: Introduction To Computer Science 1✔️,MATH241: Analytic Geometry and Calculus A✔️ ...... Taken: ❌/i
            );
        });
        test("checking to see if the taken status of prerequisites updates when clicked twice to not taken", () => {
            const checkboxes: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxes[1].click();
            checkboxes[2].click();
            screen.getByText(
                /Course Name: CISC181: Introduction to Computer Science II Course Credits: 3 ...... Pre Requisite: CISC108: Introduction To Computer Science 1✔️,MATH241: Analytic Geometry and Calculus A✔️ ...... Taken: ❌/i
            );
            checkboxes[1].click();
            checkboxes[2].click();
            screen.getByText(
                /Course Name: CISC181: Introduction to Computer Science II Course Credits: 3 ...... Pre Requisite: CISC108: Introduction To Computer Science 1❌,MATH241: Analytic Geometry and Calculus A❌ ...... Taken: ❌/i
            );
        }); */
        //Testing Degree Selection Renders
        test("Testing to see if dropdown menu renders", () => {
            expect(screen.getByText("Degrees")).toBeInTheDocument;
        });
        //Veryfiying degree selection starts at No Degree Selected
        test("Testing to see if dropdown menu renders description", () => {
            expect(screen.getByText("No Degree has been selected"))
                .toBeInTheDocument;
        });
        //Testing Degree Selection changes description rendered
        test("Testing dropdown selection renders description on selected degree", () => {
            fireEvent.change(screen.getByTestId("dropdown"), {
                target: {
                    value: "Cybersecurity Concentration"
                }
            });
            expect(
                screen.getByText(
                    "Backdoor vulnerabilities. Denial of service attacks. Viruses, worms, and cyberintrusions. Massive security breaches at major corporations, government facilities, and other institutions are announced on a regular basis. Is it any surprise that cybersecurity experts are among the most in-demand computer science professionals? Students in this concentration study the whole spectrum of vulnerabilities as well as countermeasures to defend against them. Learn how to design secure software/hardware systems and networks; explore intrusion detection, cryptographic protocols, firewalls, and access control, among other topics."
                )
            ).toBeInTheDocument;
        });
    });
});

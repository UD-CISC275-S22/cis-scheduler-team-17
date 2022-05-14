import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Testing aspects of the ", () => {
    describe("Testing the Select Taken UI", () => {
        beforeEach(() => {
            // this renders our web page
            render(<App />);
        });
        test("Testing to see if we can get to the scheduler page", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.getByText(
                    /Computer & Information Sciences Schedule Planner/i
                )
            ).toBeInTheDocument;
        });
        // the tests here will check to see if the lists of taken and not taken on the scheduler page work properly
        test("Testing to see if the first degree name has been printed", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.getByText(
                    /Computer & Information Sciences Schedule Planner/i
                )
            ).toBeInTheDocument;
            expect(screen.getByText(/Course ID: EGGG101❌Pre Requisite:/i))
                .toBeInTheDocument;
        });
        test("Testing to see if taken starts off as false when going to the scheduler page", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.getByText(
                    /Computer & Information Sciences Schedule Planner/i
                )
            ).toBeInTheDocument;
            expect(screen.getByText(/Course ID: EGGG101❌Pre Requisite:/i))
                .toBeInTheDocument;
        });
        test("testing to see if we can update the value of taken if we use taken UI on initial page", () => {
            const checkboxi: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxi[0].click();
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(screen.getByText(/Course ID: EGGG101✔️Pre Requisite:/i))
                .toBeInTheDocument;
        });
        test("testing to see if we can update taken, go back update taken again and get the correct text", () => {
            const checkbox: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkbox[0].click();
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(screen.findByText(/Course ID: EGGG101✔️Pre Requisite:/i))
                .toBeInTheDocument;
            // we have made sure thet we get the proper output the first time around, going back to update the input again
            const Back: HTMLInputElement = screen.getByText("Back");
            Back.click();
            checkbox[0].click;
            SchedulerButton.click();
            expect(screen.findByText(/Course ID: EGGG101❌Pre Requisite:/i))
                .toBeInTheDocument;
        });
        test("testing to see if the taken status of prerecs is printed properly intially", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.getByText(
                    /Course ID: CISC181❌Pre Requisite:CISC108 ❌ MATH241 ❌/i
                )
            ).toBeInTheDocument;
        });
        test("testing to see that taken for prerecs is updated properly  when the prerecs are taken", () => {
            const checkboxi: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxi[1].click();
            checkboxi[2].click();
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.getByText(
                    /Course ID: CISC181❌Pre Requisite:CISC108 ✔️ MATH241 ✔️/i
                )
            ).toBeInTheDocument;
        });
        test("testing to see if prerecs updated properly if you update, go to scheduler, then update and return to scheduler again", () => {
            const checkboxi: HTMLInputElement[] =
                screen.getAllByRole("checkbox");
            checkboxi[1].click();
            checkboxi[2].click();
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.findByText(
                    /Course ID: CISC181❌Pre Requisite:CISC108 ✔️ MATH241 ✔️/i
                )
            ).toBeInTheDocument;
            // our initial update worked, now to go back and update the input again
            const Back: HTMLInputElement = screen.getByText("Back");
            Back.click();
            checkboxi[1].click();
            checkboxi[2].click();
            SchedulerButton.click();
            expect(
                screen.findByText(
                    /Course ID: CISC181❌Pre Requisite:CISC108 ❌ MATH241 ❌/i
                )
            ).toBeInTheDocument;
        });
        // this is where the testing of the search and edit features would goes
        test("Testing Create Course Button Renders", () => {
            expect(screen.getAllByText("Create Course"));
        });
        //Testing Add Existing Course
        test("Testing Create Course Button Renders", () => {
            expect(screen.getAllByText("Add Existing"));
        });
    });
    describe("Testing the Semster UI", () => {
        // testing of the semester show/hide add form
        beforeEach(() => {
            render(<App />);
        });
        // test show/hide semester add form is initially closed
        test("Testing to see if the Show/Hide Add Semester Form is initially closed", () => {
            expect(screen.getByText(/Add Semester/i)).toBeInTheDocument();
        });
        // test show/hide semester add form opens when clicked
        test("Testing to see if the Show/Hide Add Semester Form is open", () => {
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            expect(screen.getByText(/Hide Form/i)).toBeInTheDocument();
        });
        //test adding semester
        test("Testing adding a semester to the semester list/degree view", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            expect(screen.getByText(/Spring 2022: 0 Credits/i));
        });
        //test removing a semester -- broken
        test("Testing removing a semester from the semester list/degree view", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            //remove the semester
            const removeSemButton = screen.getByTestId("remove-sem");
            removeSemButton.click();
            expect(screen.getByText(/Hide Form/i));
        });
    });
    //Make Semester Testing
    describe("MakeSemester", () => {
        test("Testing Add Existing Course", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            //Open existing course form
            const addExisting = screen.getByTestId("addExisting");
            addExisting.click();
            //Respond to form
            const nameForm = screen.getByTestId("addExistingForm");
            userEvent.type(nameForm, "CISC181");
            //Submit Form
            const submitButton = screen.getByTestId("addExistingSubmit");
            submitButton.click();
            expect(
                screen.getByText("CISC181: Introduction to Computer Science II")
            );
        });
        test("Testing Add Existing Course That Does Not Exist", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            //Open existing course form
            const addExisting = screen.getByTestId("addExisting");
            addExisting.click();
            //Respond to form
            const nameForm = screen.getByTestId("addExistingForm");
            userEvent.type(nameForm, "FakeCourse");
            //Submit Form
            const submitButton = screen.getByTestId("addExistingSubmit");
            submitButton.click();
            expect(
                screen.getByText(
                    "Please make sure the Course ID you entered matches a Course ID in the list of courses not yet taken or planned. If you would like to create a new course, please click the Create Course button above."
                )
            );
        });
        //Testing Create Course
        //Testing Credit Updates - Adding Courses
        test("Testing Credit Update - Adding Courses", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            //Open existing course form
            const addExisting = screen.getByTestId("addExisting");
            addExisting.click();
            //Create First Course
            //Respond to form
            const nameForm = screen.getByTestId("addExistingForm");
            userEvent.type(nameForm, "CISC181");
            //Submit Form
            const submitButton = screen.getByTestId("addExistingSubmit");
            submitButton.click();
            //Create Second Course
            addExisting.click();
            //Respond to form
            userEvent.type(nameForm, "CISC108");
            //Submit Form
            submitButton.click();
            expect(screen.getByText(/Spring 2022: 6 Credits/i));
        });
        //Testing Remove Courses
        test("Testing Remove Existing Course", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            //Open existing course form
            const addExisting = screen.getByTestId("addExisting");
            addExisting.click();
            //Respond to form
            const nameForm = screen.getByTestId("addExistingForm");
            userEvent.type(nameForm, "CISC181");
            //Submit Form
            const submitButton = screen.getByTestId("addExistingSubmit");
            submitButton.click();
            //Remove Course
            const removeCourseButton = screen.getByTestId("removeCourse");
            removeCourseButton.click();
            expect(
                screen.getByText("CISC181: Introduction to Computer Science II")
            ).toBeFalsy;
        });
        //Testing Credit Updates - Removing Courses
        test("Testing Remove Existing Course", () => {
            //click semester form button
            const showHideSemesterButton = screen.getByTestId("show/hide");
            showHideSemesterButton.click();
            //add the semester
            const addSemButton = screen.getByTestId("add-sem");
            addSemButton.click();
            //Open existing course form
            const addExisting = screen.getByTestId("addExisting");
            addExisting.click();
            //Respond to form
            const nameForm = screen.getByTestId("addExistingForm");
            userEvent.type(nameForm, "CISC181");
            //Submit Form
            const submitButton = screen.getByTestId("addExistingSubmit");
            submitButton.click();
            //Remove Course
            const removeCourseButton = screen.getByTestId("removeCourse");
            removeCourseButton.click();
            expect(screen.getByText(/Spring 2022: 0 Credits/i));
        });
    });
});

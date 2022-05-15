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
    });
    describe("Testing the Edit Course UI", () => {
        // testing of the semester show/hide add form
        beforeEach(() => {
            render(<App />);
        });
        test("Testing to see if the Edit course UI shows UP", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            expect(
                screen.getByText(/Search for Course to Edit/i)
            ).toBeInTheDocument();
        });
        test("Testing to see if the search bar is present on the screen", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            searchBar.click();
        });
        // testing to see ig the [roper messages show when the user is searching
        test("Testing to see if I can enter CISC and have the searching text show", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "CISC");
            expect(screen.getByText("Searching")).toBeInTheDocument();
        });
        test("Testing to see if I can search EGGG101 and have the course found be active", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const search_bar = screen.getByRole("textbox");
            userEvent.type(search_bar, "EGGG101");
            expect(screen.getByText("✔️")).toBeInTheDocument();
        });
        test("Testing to see if the we put in something wrong, no courses can be found and correct message shows", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const search_bar = screen.getByRole("textbox");
            userEvent.type(search_bar, "EGGGGGG");
            expect(
                screen.getByText("❌ There are no courses matching your input")
            ).toBeInTheDocument();
        });
        // beginning to test the features of the edit
        test("Testing to see if I can get to the edit course UI", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "EGGG101");
            const select_course: HTMLInputElement =
                screen.getByText("Select Course");
            select_course.click();
            expect(
                screen.getByText("You are currently editing EGGG101")
            ).toBeInTheDocument();
        });
        test("Testing to see if I can edit the courses ID", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "EGGG101");
            const select_course: HTMLInputElement =
                screen.getByText("Select Course");
            select_course.click();
            // editing course ID
            const edit_boxes: HTMLElement[] = screen.getAllByRole("textbox");
            userEvent.type(edit_boxes[0], "EGGIE SMELLIE");
            // saving and returning to search bar to see if the CourseID changed
            const save_button: HTMLInputElement = screen.getByText("Save");
            const return_button: HTMLInputElement =
                screen.getByText("Return to Search");
            save_button.click();
            return_button.click();
            expect(screen.getByText(/EGGIE SMELLIE/i)).toBeInTheDocument();
        });
        test("Testing to see if I can edit the courses name", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "EGGG101");
            const select_course: HTMLInputElement =
                screen.getByText("Select Course");
            select_course.click();
            // editing course name
            const edit_boxes: HTMLElement[] = screen.getAllByRole("textbox");
            userEvent.type(
                edit_boxes[1],
                "EGGIE SMELLIE: Otherwise known as EGGG101"
            );
            // saving and returning to search bar to see if the CourseID changed
            const save_button: HTMLInputElement = screen.getByText("Save");
            const return_button: HTMLInputElement =
                screen.getByText("Return to Search");
            save_button.click();
            return_button.click();
            // going back to homepage to check already taken becasue all of the info s there
            const back_button: HTMLElement = screen.getByText("Back");
            back_button.click();
            const all_more_info: HTMLInputElement[] =
                screen.getAllByRole("button");
            all_more_info[0].click();
            expect(
                screen.getByText(/EGGIE SMELLIE: Otherwise known as EGGG101/i)
            ).toBeInTheDocument();
        });
        test("Testing to see if I can edit the courses description", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "EGGG101");
            const select_course: HTMLInputElement =
                screen.getByText("Select Course");
            select_course.click();
            // editing course description
            const edit_boxes: HTMLElement[] = screen.getAllByRole("textbox");
            userEvent.type(
                edit_boxes[2],
                "EGGIE SMELLIE: The smelly EGGG101 class that comsci majors must take sadge"
            );
            // saving and returning to search bar to see if the CourseID changed
            const save_button: HTMLInputElement = screen.getByText("Save");
            const return_button: HTMLInputElement =
                screen.getByText("Return to Search");
            save_button.click();
            return_button.click();
            // going back to homepage to check already taken becasue all of the info s there
            const back_button: HTMLElement = screen.getByText("Back");
            back_button.click();
            const all_more_info: HTMLInputElement[] =
                screen.getAllByRole("button");
            all_more_info[0].click();
            expect(
                screen.getByText(
                    /EGGIE SMELLIE: The smelly EGGG101 class that comsci majors must take sadge/i
                )
            ).toBeInTheDocument();
        });
        test("Testing to see if I can edit the courses number of credits", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "EGGG101");
            const select_course: HTMLInputElement =
                screen.getByText("Select Course");
            select_course.click();
        });
        test("Testing to see the revert feature is working", () => {
            const SchedulerButton: HTMLInputElement =
                screen.getByText("Make Schedule");
            SchedulerButton.click();
            const searchBar = screen.getByRole("textbox");
            userEvent.type(searchBar, "CISC108");
            const select_course: HTMLInputElement =
                screen.getByText("Select Course");
            select_course.click();
            expect(
                screen.getByText("You are currently editing CISC108")
            ).toBeInTheDocument();
            // editing course ID
            const edit_boxes: HTMLElement[] = screen.getAllByRole("textbox");
            userEvent.type(edit_boxes[0], "108 my beloved");
            // saving and returning to search bar to see if the CourseID changed
            const save_button: HTMLInputElement = screen.getByText("Save");
            const return_button: HTMLInputElement =
                screen.getByText("Return to Search");
            save_button.click();
            return_button.click();
            expect(screen.getByText(/108 my beloved/i)).toBeInTheDocument();
            userEvent.type(searchBar, "108 my beloved");
            const select_course_2: HTMLInputElement =
                screen.getByText("Select Course");
            select_course_2.click();
            // getting back and clicking the revert button
            const revert_button: HTMLInputElement = screen.getByText(
                "Reset Course to Default"
            );
            const return_button_2: HTMLInputElement =
                screen.getByText("Return to Search");
            revert_button.click();
            return_button_2.click();
            expect(screen.getByText("CISC108")).toBeInTheDocument();
        });
    });
});

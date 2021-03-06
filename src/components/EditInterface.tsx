import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/Course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditInterface({
    Course2Edit
}: {
    Course2Edit: Course;
}): JSX.Element {
    const [inputID, setInputID] = useState<string>(Course2Edit.course_id);
    const [inputName, setInputName] = useState<string>(Course2Edit.name);
    const [inputDesc, setInputDesc] = useState<string>(Course2Edit.description);
    const [inputCredits, setInputCredits] = useState<number>(
        Course2Edit.credits
    );

    // ID
    function updateID(event: ChangeEvent) {
        setInputID(event.target.value);
    }

    // Name
    function updateName(event: ChangeEvent) {
        setInputName(event.target.value);
    }

    // Description
    function updateDesc(event: ChangeEvent) {
        setInputDesc(event.target.value);
    }

    // Credits
    function changeCredits(event: ChangeEvent) {
        if (!isNaN(parseInt(event.target.value))) {
            setInputCredits(parseInt(event.target.value));
        }
    }

    // Save
    function saveChange() {
        Course2Edit.course_id = inputID;
        Course2Edit.name = inputName;
        Course2Edit.description = inputDesc;
        Course2Edit.credits = inputCredits;
    }

    // Revert
    function revert() {
        Course2Edit.course_id = Course2Edit.og_id;
        Course2Edit.name = Course2Edit.og_name;
        Course2Edit.description = Course2Edit.og_description;
        Course2Edit.credits = Course2Edit.og_credits;
    }

    return (
        <div>
            <div>You are currently editing {Course2Edit.course_id}</div>
            <div>
                {/** This controls editing the courseID */}
                <Form.Group controlId="InputNewID">
                    <Form.Label>Insert The New Course ID Here:</Form.Label>
                    <Form.Control
                        value={inputID}
                        onChange={updateID}
                    ></Form.Control>
                </Form.Group>
                <div>Current Course ID: {inputID}</div>
            </div>
            <div>
                {/** This controls editing the Name */}
                <Form.Group controlId="InputNewName">
                    <Form.Label>Insert The New Course Name Here:</Form.Label>
                    <Form.Control
                        value={inputName}
                        onChange={updateName}
                    ></Form.Control>
                    <div>Current Course Name: {inputName}</div>
                </Form.Group>
            </div>
            <div>
                {/** This controls editing the description */}
                <Form.Group controlId="InputNewDesc">
                    <Form.Label>
                        Insert The New Course Description Here:
                    </Form.Label>
                    <Form.Control
                        value={inputDesc}
                        onChange={updateDesc}
                    ></Form.Control>
                </Form.Group>
                <div>Current Course Description: {inputDesc}</div>
            </div>
            <div>
                {/** This controls editing the credits */}
                <Form.Group controlId="InputNewCredits">
                    <Form.Label>Insert The New Course Credits Here:</Form.Label>
                    <Form.Control
                        type="number"
                        value={inputCredits}
                        onChange={changeCredits}
                    />
                </Form.Group>
                <div>Current Credits Worth: {inputCredits}</div>
            </div>
            <Button onClick={saveChange}>Save</Button>
            <Button onClick={revert} className={"remove"}>
                Reset Course to Default
            </Button>
        </div>
    );
}

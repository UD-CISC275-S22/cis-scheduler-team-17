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
    function revert() {
        Course2Edit.courseID = Course2Edit.ogID;
        Course2Edit.name = Course2Edit.ogName;
        Course2Edit.description = Course2Edit.ogdesc;
        Course2Edit.credits = Course2Edit.ogCredits;
    }

    return (
        <div>
            <div>You are currently editing {Course2Edit.courseID}</div>
            <EditID_UI Course2Edit={Course2Edit} />
            <EditNameUI Course2Edit={Course2Edit} />
            <EditDescUI Course2Edit={Course2Edit} />
            <EditCreditsUI Course2Edit={Course2Edit} />
            <Button onClick={revert}>Reset Course to Default</Button>
        </div>
    );
}

function EditID_UI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputID, setInputID] = useState<string>(Course2Edit.courseID);

    function updateID(event: ChangeEvent) {
        setInputID(event.target.value);
    }
    function saveChange() {
        Course2Edit.courseID = inputID;
    }

    return (
        <div>
            <Form.Group controlId="InputNewID">
                <Form.Label>Insert The New Course ID Here:</Form.Label>
                <Form.Control
                    value={inputID}
                    onChange={updateID}
                ></Form.Control>
            </Form.Group>
            <div>Current Course ID: {inputID}</div>
            <Button onClick={saveChange}>Save</Button>
        </div>
    );
}

function EditNameUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputName, setInputName] = useState<string>(Course2Edit.name);

    function updateName(event: ChangeEvent) {
        setInputName(event.target.value);
    }

    function saveChange() {
        Course2Edit.name = inputName;
    }

    return (
        <div>
            <Form.Group controlId="InputNewName">
                <Form.Label>Insert The New Course Name Here:</Form.Label>
                <Form.Control
                    value={inputName}
                    onChange={updateName}
                ></Form.Control>
                <div>Current Course Name: {inputName}</div>
                <Button onClick={saveChange}>Save</Button>
            </Form.Group>
        </div>
    );
}

function EditDescUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputDesc, setInputDesc] = useState<string>(Course2Edit.description);

    function updateDesc(event: ChangeEvent) {
        setInputDesc(event.target.value);
    }
    function saveChange() {
        Course2Edit.description = inputDesc;
    }

    return (
        <div>
            <Form.Group controlId="InputNewDesc">
                <Form.Label>Insert The New Course Description Here:</Form.Label>
                <Form.Control
                    value={inputDesc}
                    onChange={updateDesc}
                ></Form.Control>
            </Form.Group>
            <div>Current Course Description: {inputDesc}</div>
            <Button onClick={saveChange}>Save</Button>
        </div>
    );
}

function EditCreditsUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputCredits, setInputCredits] = useState<number>(
        Course2Edit.credits
    );

    function changeCredits(event: ChangeEvent) {
        if (!isNaN(parseInt(event.target.value))) {
            setInputCredits(parseInt(event.target.value));
            console.log(inputCredits);
        }
    }

    function saveChange() {
        console.log(inputCredits);
        Course2Edit.credits = inputCredits;
    }

    return (
        <div>
            <Form.Group controlId="InputNewCredits">
                <Form.Label>Insert The New Course Credits Here:</Form.Label>
                <Form.Control
                    type="number"
                    value={inputCredits}
                    onChange={changeCredits}
                />
            </Form.Group>
            <div>Current Credits Worth: {inputCredits}</div>
            <Button onClick={saveChange}>Save</Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course } from "../interfaces/course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditInterface({
    Course2Edit
}: {
    Course2Edit: Course;
}): JSX.Element {
    const [EditID, SetEditID] = useState<boolean>(false);
    const [EditName, SetEditName] = useState<boolean>(false);
    const [EditDesc, SetEditDesc] = useState<boolean>(false);
    const [EditSemesters, setEditSemesters] = useState<boolean>(false);
    const [EditPreRecs, setEditPreRecs] = useState<boolean>(false);
    const [EditCredits, setEditCredits] = useState<boolean>(false);

    return (
        <div>
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => SetEditID(!EditID)}
                id="editing-ID"
                label="ID"
                value="ID"
            />
            {EditID ? <EditID_UI Course2Edit={Course2Edit} /> : ""}
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => SetEditName(!EditName)}
                id="editing-Name"
                label="Name"
                value="Name"
            />
            {EditName ? <EditNameUI Course2Edit={Course2Edit} /> : ""}
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => SetEditDesc(!EditDesc)}
                id="editing-desc"
                label="Description"
                value="Description"
            />
            {EditDesc ? <EditDescUI Course2Edit={Course2Edit} /> : ""}
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => setEditSemesters(!EditSemesters)}
                id="editing-semesters"
                label="semeseters"
                value="semesters"
            />
            {EditSemesters ? <EditSemestersUI Course2Edit={Course2Edit} /> : ""}
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => setEditPreRecs(!EditPreRecs)}
                id="editing-PreRecs"
                label="PreRecs"
                value="PreRecs"
            />
            {EditPreRecs ? <EditPreRecsUI Course2Edit={Course2Edit} /> : ""}
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => setEditCredits(!EditCredits)}
                id="editing-Credits"
                label="Credits"
                value="Credits"
            />
            {EditCredits ? <EditCreditsUI Course2Edit={Course2Edit} /> : ""}
        </div>
    );
}

function EditID_UI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputID, setInputID] = useState<string>("");

    function updateID(event: ChangeEvent) {
        setInputID(event.target.value);
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
        </div>
    );
}

function EditNameUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputName, setInputName] = useState<string>("");

    function updateName(event: ChangeEvent) {
        setInputName(event.target.value);
        Course2Edit.name = inputName;
    }

    return (
        <div>
            <Form.Group controlId="InputNewID">
                <Form.Label>Insert The New Course Name Here:</Form.Label>
                <Form.Control
                    value={inputName}
                    onChange={updateName}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}

function EditDescUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputDesc, setInputDesc] = useState<string>("");

    function updateDesc(event: ChangeEvent) {
        setInputDesc(event.target.value);
        Course2Edit.description = inputDesc;
    }

    return (
        <div>
            <Form.Group controlId="InputNewID">
                <Form.Label>Insert The New Course ID Here:</Form.Label>
                <Form.Control
                    value={inputDesc}
                    onChange={updateDesc}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}

function EditSemestersUI({
    Course2Edit
}: {
    Course2Edit: Course;
}): JSX.Element {
    return <div></div>;
}

function EditPreRecsUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    return <div></div>;
}

function EditCreditsUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
    const [inputCredits, setInputCredits] = useState<string>("");

    function updateCredits(event: ChangeEvent) {
        setInputCredits(event.target.value);
        Course2Edit.courseID = inputCredits;
    }

    return (
        <div>
            <Form.Group controlId="InputNewID">
                <Form.Label>Insert The New Course ID Here:</Form.Label>
                <Form.Control
                    value={inputCredits}
                    type="numbers"
                    onChange={updateCredits}
                ></Form.Control>
            </Form.Group>
        </div>
    );
}

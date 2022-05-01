import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course /*, Season*/ } from "../interfaces/course-Degree-Semester";

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
    //const [EditSemesters, setEditSemesters] = useState<boolean>(false);
    //const [EditPreRecs, setEditPreRecs] = useState<boolean>(false);
    const [EditCredits, setEditCredits] = useState<boolean>(false);

    function revert() {
        Course2Edit.courseID = Course2Edit.ogID;
        Course2Edit.name = Course2Edit.ogName;
        Course2Edit.description = Course2Edit.ogdesc;
        Course2Edit.credits = Course2Edit.ogCredits;
    }

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
            {/* <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => setEditSemesters(!EditSemesters)}
                id="editing-semesters"
                label="semeseters"
                value="semesters"
            />
            {EditSemesters ? <EditSemestersUI Course2Edit={Course2Edit} /> : ""} */}
            {/*<Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => setEditPreRecs(!EditPreRecs)}
                id="editing-PreRecs"
                label="PreRecs"
                value="PreRecs"
            />
    {EditPreRecs ? <EditPreRecsUI Course2Edit={Course2Edit} /> : ""}*/}
            <Form.Check
                type="checkbox"
                name="EditOptions"
                onChange={() => setEditCredits(!EditCredits)}
                id="editing-Credits"
                label="Credits"
                value="Credits"
            />
            {EditCredits ? <EditCreditsUI Course2Edit={Course2Edit} /> : ""}
            <Button onClick={revert}>Revert To Original IN PROGRESS</Button>
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

// Decided to delete the edit semester thing bc we dont need it
/* function EditSemestersUI({
    Course2Edit
}: {
    Course2Edit: Course;
}): JSX.Element {
    const [eventYellow, noEventYellow] = useState<string>("");
    console.log(eventYellow);
    const [fall, fallChecked] = useState<boolean>(
        Course2Edit.SemesterAvailable.includes("Fall")
    );
    const [spring, springChecked] = useState<boolean>(
        Course2Edit.SemesterAvailable.includes("Spring")
    );
    const [winter, winterChecked] = useState<boolean>(
        Course2Edit.SemesterAvailable.includes("Winter")
    );
    const [summer, summerChecked] = useState<boolean>(
        Course2Edit.SemesterAvailable.includes("Summer")
    );
    const [varies, variesChecked] = useState<boolean>(
        Course2Edit.SemesterAvailable.includes("Varies By Department")
    );

    function Fall(event: ChangeEvent) {
        noEventYellow(event.target.value);
        fallChecked(!fall);
        if (!fall) {
            Course2Edit.SemesterAvailable = [
                ...Course2Edit.SemesterAvailable,
                "Fall"
            ];
        } else {
            Course2Edit.SemesterAvailable =
                Course2Edit.SemesterAvailable.filter(
                    (currentSeason: Season): boolean => currentSeason !== "Fall"
                );
        }
        Course2Edit.SemestersAvailableString =
            Course2Edit.SemesterAvailable.join(", ");
    }
    function Spring(event: ChangeEvent) {
        noEventYellow(event.target.value);
        springChecked(!spring);
        if (!spring) {
            Course2Edit.SemesterAvailable = [
                ...Course2Edit.SemesterAvailable,
                "Spring"
            ];
        } else {
            Course2Edit.SemesterAvailable =
                Course2Edit.SemesterAvailable.filter(
                    (currentSeason: Season): boolean =>
                        currentSeason !== "Spring"
                );
        }
        Course2Edit.SemestersAvailableString =
            Course2Edit.SemesterAvailable.join(", ");
    }
    function Winter(event: ChangeEvent) {
        noEventYellow(event.target.value);
        winterChecked(!winter);
        if (!winter) {
            Course2Edit.SemesterAvailable = [
                ...Course2Edit.SemesterAvailable,
                "Winter"
            ];
        } else {
            Course2Edit.SemesterAvailable =
                Course2Edit.SemesterAvailable.filter(
                    (currentSeason: Season): boolean =>
                        currentSeason !== "Winter"
                );
        }
        Course2Edit.SemestersAvailableString =
            Course2Edit.SemesterAvailable.join(", ");
    }
    function Summer(event: ChangeEvent) {
        noEventYellow(event.target.value);
        summerChecked(!summer);
        if (!summer) {
            Course2Edit.SemesterAvailable = [
                ...Course2Edit.SemesterAvailable,
                "Summer"
            ];
        } else {
            Course2Edit.SemesterAvailable =
                Course2Edit.SemesterAvailable.filter(
                    (currentSeason: Season): boolean =>
                        currentSeason !== "Summer"
                );
        }
        Course2Edit.SemestersAvailableString =
            Course2Edit.SemesterAvailable.join(", ");
    }
    function Varies(event: ChangeEvent) {
        noEventYellow(event.target.value);
        variesChecked(!varies);
        if (!varies) {
            Course2Edit.SemesterAvailable = [
                ...Course2Edit.SemesterAvailable,
                "Varies By Department"
            ];
        } else {
            Course2Edit.SemesterAvailable =
                Course2Edit.SemesterAvailable.filter(
                    (currentSeason: Season): boolean =>
                        currentSeason !== "Varies By Department"
                );
        }
        Course2Edit.SemestersAvailableString =
            Course2Edit.SemesterAvailable.join(", ");
    }

    return (
        <div>
            <Form.Group controlId="InputNewSemesters">
                <Form.Check
                    type="checkbox"
                    id="fall"
                    label="Fall"
                    checked={fall}
                    onChange={Fall}
                />
                <Form.Check
                    type="checkbox"
                    id="Spring"
                    label="Spring"
                    checked={spring}
                    onChange={Spring}
                />
                <Form.Check
                    type="checkbox"
                    id="winter"
                    label="Winter"
                    checked={winter}
                    onChange={Winter}
                />
                <Form.Check
                    type="checkbox"
                    id="summer"
                    label="Summer"
                    checked={summer}
                    onChange={Summer}
                />
                <Form.Check
                    type="checkbox"
                    id="Varies By Department"
                    label="Varies By Department"
                    checked={varies}
                    onChange={Varies}
                />
            </Form.Group>
            <div>
                The Seasons our course holds include{" "}
                {Course2Edit.SemestersAvailableString}
            </div>
        </div>
    );
} */

// function EditPreRecsUI({ Course2Edit }: { Course2Edit: Course }): JSX.Element {
//     console.log(Course2Edit.name);
//     return <div></div>;
// }

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

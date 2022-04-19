import React, { useState } from "react";
import { AllDegrees } from "../interfaces/AllCourses-AllDegrees";
import { Degree } from "../interfaces/course-Degree-Semester";
import "../App.css";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export let SelectedDegree = AllDegrees[0];

export function DropdownDegrees(): JSX.Element {
    const degrees = [...AllDegrees];
    const [degree, setDegree] = useState<Degree>(degrees[0]);
    function updateDegree(event: ChangeEvent) {
        const newDegreeName = event.target.value;
        const newDegree = degrees.find(
            (degree: Degree): boolean => degree.name === newDegreeName
        );
        if (newDegree !== undefined) {
            setDegree(newDegree);
            SelectedDegree = newDegree;
        }
    }
    return (
        <div>
            <Form.Group controlId="Degrees">
                <Form.Label>Degrees</Form.Label>
                <Form.Select
                    className="dropdownForm"
                    value={degree.name}
                    onChange={updateDegree}
                >
                    {degrees.map((degree: Degree) => (
                        <option
                            key={degree.name}
                            value={degree.name}
                            title={degree.description}
                        >
                            {degree.name}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <span>{degree.description}</span>
        </div>
    );
}

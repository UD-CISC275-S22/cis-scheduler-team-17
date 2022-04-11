import React, { useState } from "react";
import { AllDegrees } from "../interfaces/AllCourses-AllDegrees";
import { Degree } from "../interfaces/course-Degree-Semester";
import "../App.css";
import { Form, Tooltip } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function DropdownDegrees(): JSX.Element {
    const degrees = [...AllDegrees];
    const [degree, setDegree] = useState<string>(degrees[0].name);
    function updateDegree(event: ChangeEvent) {
        setDegree(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="Degrees">
                <Form.Label>Degrees</Form.Label>
                <Form.Select
                    className="dropdownForm"
                    value={degree}
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
        </div>
    );
}

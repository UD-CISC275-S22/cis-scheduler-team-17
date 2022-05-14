import React from "react";
import "../App.css";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CreateCourse({
    visible,
    changeVisibility,
    courseID,
    setID,
    courseName,
    setName,
    courseDescription,
    setDescription,
    credits,
    changeCredits,
    addCourse
}: {
    visible: boolean;
    changeVisibility: () => void;
    courseID: string;
    setID: (value: string) => void;
    courseName: string;
    setName: (value: string) => void;
    courseDescription: string;
    setDescription: (value: string) => void;
    credits: number;
    changeCredits: (value: string) => void;
    addCourse: () => void;
    resetState: () => void;
}): JSX.Element {
    return (
        <div>
            <Button onClick={changeVisibility}>
                {visible ? "Hide Form" : "Create Course"}
            </Button>
            {visible && (
                <div>
                    <Form.Control
                        data-testid="createCourseID"
                        type="string"
                        value={courseID}
                        onChange={(event: ChangeEvent) =>
                            setID(event.target.value)
                        }
                        placeholder={"Enter Course ID"}
                    />
                    <Form.Control
                        data-testid="createCourseName"
                        type="string"
                        value={courseName}
                        onChange={(event: ChangeEvent) =>
                            setName(event.target.value)
                        }
                        placeholder={"Enter Course Name"}
                    />
                    <Form.Control
                        data-testid="createCourseDescription"
                        type="string"
                        value={courseDescription}
                        onChange={(event: ChangeEvent) =>
                            setDescription(event.target.value)
                        }
                        placeholder={"Enter Course Description"}
                    />
                    <label>Enter Number of Credits</label>
                    <Form.Control
                        data-testid="createCourseCredits"
                        type="number"
                        min={1}
                        step={1}
                        value={credits}
                        onChange={(event: ChangeEvent) =>
                            changeCredits(event.target.value)
                        }
                    />
                    <Button onClick={addCourse}>Submit Form</Button>
                </div>
            )}
        </div>
    );
}

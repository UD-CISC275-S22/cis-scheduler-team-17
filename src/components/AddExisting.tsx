import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course, Degree } from "../interfaces/Course-Degree-Semester";
import { makeCourseTaken } from "../interfaces/MakeDegree-MakeCourses";
import "../App.css";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function AddExisting({
    courseList,
    degree,
    changeList,
    intersection,
    changeIntersect,
    totalCredits,
    changeTotal,
    updateDegree
}: {
    courseList: Course[];
    degree: Degree;
    changeList: (value: Course[]) => void;
    intersection: Course[];
    changeIntersect: (value: Course[]) => void;
    totalCredits: number;
    changeTotal: (value: number) => void;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    //Visiblity of form
    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    function changeVisibility() {
        setVisible(!visible);
    }
    //Create course information
    const [ecourseID, setEID] = useState<string>("");
    function addExisting() {
        const findCourse = degree.CoursesRequired.filter(
            (course: Course): boolean =>
                course.courseID === ecourseID && course.taken === false
        );
        if (findCourse.length === 1) {
            const existing = findCourse[0];
            existing.taken = true;
            existing.taken_String = "✔️";
            const newCourse = makeCourseTaken(
                existing.courseID,
                existing.name,
                existing.description,
                existing.SemesterAvailable,
                existing.prerecs,
                existing.credits,
                true
            );
            changeTotal(totalCredits + existing.credits);
            changeIntersect([...intersection, existing]);
            changeList([...courseList, newCourse]);
            updateDegree;
            setError(false);
            changeVisibility();
        } else {
            setError(true);
        }
    }
    return (
        <div>
            <Button onClick={changeVisibility}>
                {visible ? "Hide Form" : "Add Existing Course"}
            </Button>
            {visible && (
                <div>
                    <Form.Control
                        type="string"
                        value={ecourseID}
                        onChange={(event: ChangeEvent) =>
                            setEID(event.target.value)
                        }
                        placeholder={"Enter Course ID"}
                    />
                    <Button onClick={addExisting}>Submit Form</Button>
                </div>
            )}
            {visible && error && (
                <p>
                    Please make sure the Course ID you entered matches a Course
                    ID in the list of courses not yet taken or planned. If you
                    would like to create a new course, please click the{" "}
                    <strong>Create Course</strong> button above.
                </p>
            )}
        </div>
    );
}

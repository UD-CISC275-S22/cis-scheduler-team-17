import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Course, Season } from "../interfaces/course-Degree-Semester";
import { makeCourse } from "../interfaces/makeDegree-Makecourses";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MakeSemester({
    currentList
}: {
    currentList: Course[];
}): JSX.Element {
    //Visiblity of form
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility() {
        setVisible(!visible);
    }
    //Semester Availability
    //Course list to be shown in table
    const [courseList, changeList] = useState<Course[]>(currentList);
    //Create course information
    const [courseName, setName] = useState<string>("");
    const [courseDescription, setDescription] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    //Reset State - Removes all courses
    const resetState = () => {
        setName("");
        setDescription("");
        setCredits(0);
        changeList([]);
    };
    //Set Credits
    function changeCredits(credit: string) {
        if (!isNaN(parseInt(credit))) {
            setCredits(parseInt(credit));
        }
    }
    function addCourse() {
        const newCourse = makeCourse(
            courseName,
            courseDescription,
            [],
            [],
            credits
        );
        changeList([...courseList, newCourse]);
    }
    return (
        <div>
            <Table bordered className="pageLayout">
                <label>Semester + Year</label>
                <tr className="key">
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Number of Credits</th>
                    <th>Move Course</th>
                </tr>
                {courseList.map((course: Course) => (
                    <tr key={course.name}>
                        <th>{course.name}</th>
                        <th>{course.description}</th>
                        <th>{course.credits}</th>
                        <th>{"UC"}</th>
                    </tr>
                ))}
            </Table>
            <Button onClick={changeVisibility}>
                {visible ? "Hide Form" : "Create Course"}
            </Button>
            {visible && (
                <div>
                    <Form.Control
                        type="string"
                        value={courseName}
                        onChange={(event: ChangeEvent) =>
                            setName(event.target.value)
                        }
                    />
                    <Form.Control
                        type="string"
                        value={courseDescription}
                        onChange={(event: ChangeEvent) =>
                            setDescription(event.target.value)
                        }
                    />
                    <Form.Control
                        type="number"
                        value={credits}
                        onChange={(event: ChangeEvent) =>
                            changeCredits(event.target.value)
                        }
                    />
                    <Button onClick={addCourse}>Submit Form</Button>
                </div>
            )}
            <br></br>
            <Button onClick={resetState}>Remove All Courses</Button>
        </div>
    );
}

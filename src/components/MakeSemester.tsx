import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Course, SemesterPlanner } from "../interfaces/course-Degree-Semester";
import { makeCourse } from "../interfaces/makeDegree-Makecourses";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MakeSemester({
    semester
}: {
    semester: SemesterPlanner;
}): JSX.Element {
    //Visiblity of form
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility() {
        setVisible(!visible);
    }
    //Semester Availability
    const [courseList, changeList] = useState<Course[]>(semester.ClassesTaking);
    //Create course information
    const [courseID, setID] = useState<string>("");
    const [courseName, setName] = useState<string>("");
    const [courseDescription, setDescription] = useState<string>("");
    const [credits, setCredits] = useState<number>(semester.TotalCredits);
    //Reset State - Removes all courses
    const resetState = () => {
        setID("");
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
            courseID,
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
            <div>
                <Table>
                    <label>
                        {semester.SemesterSeason + " " + semester.year}
                    </label>
                    <tr className="key">
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Number of Credits</th>
                        <th>Move Course</th>
                    </tr>
                    {courseList.map((course: Course) => (
                        <tr key={course.name}>
                            <th>{course.courseID}</th>
                            <th>{course.name}</th>
                            <th>{course.description}</th>
                            <th>{course.credits}</th>
                            <th>{"UC"}</th>
                        </tr>
                    ))}
                </Table>
                <div>
                    <CreateCourse
                        visible={visible}
                        changeVisibility={changeVisibility}
                        courseID={courseID}
                        setID={setID}
                        courseName={courseName}
                        setName={setName}
                        courseDescription={courseDescription}
                        setDescription={setDescription}
                        credits={credits}
                        changeCredits={changeCredits}
                        addCourse={addCourse}
                        resetState={resetState}
                    ></CreateCourse>
                </div>
            </div>
        </div>
    );
}

function CreateCourse({
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
    addCourse,
    resetState
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
                        type="string"
                        value={courseID}
                        onChange={(event: ChangeEvent) =>
                            setID(event.target.value)
                        }
                        placeholder={"Enter Course ID"}
                    />
                    <Form.Control
                        type="string"
                        value={courseName}
                        onChange={(event: ChangeEvent) =>
                            setName(event.target.value)
                        }
                        placeholder={"Enter Course Name"}
                    />
                    <Form.Control
                        type="string"
                        value={courseDescription}
                        onChange={(event: ChangeEvent) =>
                            setDescription(event.target.value)
                        }
                        placeholder={"Enter Course Description"}
                    />
                    <label>Enter Number of Credits</label>
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

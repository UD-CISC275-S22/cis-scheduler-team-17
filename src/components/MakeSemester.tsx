import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import {
    Course,
    Degree,
    Season,
    SemesterPlanner
} from "../interfaces/course-Degree-Semester";
import {
    makeCourse,
    makeCourseTaken
} from "../interfaces/makeDegree-Makecourses";
import "../App.css";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MakeSemester({
    semester,
    degree,
    removeSemester
}: {
    semester: SemesterPlanner;
    degree: Degree;
    removeSemester: (currYear: number, currSeason: Season) => void;
}): JSX.Element {
    //Visiblity of form
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility() {
        setVisible(!visible);
    }
    //Semester Availability
    const [courseList, changeList] = useState<Course[]>(semester.ClassesTaking);
    const [intersection, changeIntersect] = useState<Course[]>([]);
    //Create course information
    const [courseID, setID] = useState<string>("");
    const [courseName, setName] = useState<string>("");
    const [courseDescription, setDescription] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    const [totalCredits, changeTotal] = useState<number>(semester.TotalCredits);
    //reset taken
    function resetTaken(existing: Course) {
        existing.taken = false;
        existing.taken_String = "❌";
    }
    //Reset State - Removes all courses
    const resetState = () => {
        setID("");
        setName("");
        setDescription("");
        setCredits(0);
        changeTotal(0);
        intersection.map((course: Course) => resetTaken(course));
        changeIntersect([]);
        changeList([]);
    };
    function removeSemesterReset(year: number, season: string) {
        resetState();
        removeSemester(year, season);
    }
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
        changeTotal(totalCredits + credits);
        changeList([...courseList, newCourse]);
    }
    return (
        <div>
            <div>
                <label className="semesterLabel">
                    {semester.SemesterSeason +
                        " " +
                        semester.year +
                        ": " +
                        totalCredits +
                        " Credits"}
                </label>
                <Table className="semesterTable">
                    <tr className="key">
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Number of Credits</th>
                        <th>Remove Course</th>
                    </tr>
                    {courseList.map((course: Course) => (
                        <tr key={course.name}>
                            <th>{course.courseID}</th>
                            <th>{course.name}</th>
                            <th className={"scroll"}>{course.description}</th>
                            <th>{course.credits}</th>
                            <th>
                                <Button>Remove</Button>
                            </th>
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
                    <AddExisting
                        cList={courseList}
                        degree={degree}
                        changeList={changeList}
                        intersection={intersection}
                        changeIntersect={changeIntersect}
                        totalCredits={totalCredits}
                        changeTotal={changeTotal}
                    ></AddExisting>
                    <Button onClick={resetState}>Remove All Courses</Button>
                    <Button
                        onClick={() =>
                            removeSemesterReset(
                                semester.year,
                                semester.SemesterSeason
                            )
                        }
                    >
                        Remove Semester
                    </Button>
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
        </div>
    );
}

function AddExisting({
    cList,
    degree,
    changeList,
    intersection,
    changeIntersect,
    totalCredits,
    changeTotal
}: {
    cList: Course[];
    degree: Degree;
    changeList: (value: Course[]) => void;
    intersection: Course[];
    changeIntersect: (value: Course[]) => void;
    totalCredits: number;
    changeTotal: (value: number) => void;
}): JSX.Element {
    //Visiblity of form
    const [evisible, setEVisible] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    function changeEVisibility() {
        setEVisible(!evisible);
    }
    //Create course information
    const [ecourseID, setEID] = useState<string>("");
    function addExisting() {
        const courseList = degree.CoursesRequired.filter(
            (course: Course): boolean =>
                course.courseID === ecourseID && course.taken === false
        );
        if (courseList.length === 1) {
            const existing = courseList[0];
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
            changeList([...cList, newCourse]);
            setError(false);
        } else {
            setError(true);
        }
    }
    return (
        <div>
            <Button onClick={changeEVisibility}>
                {evisible ? "Hide Form" : "Add Existing Course"}
            </Button>
            {evisible && (
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
            {evisible && error && (
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

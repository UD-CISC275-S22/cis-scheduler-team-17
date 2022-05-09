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
    removeSemester,
    updateDegree,
    updateForm
}: {
    semester: SemesterPlanner;
    degree: Degree;
    removeSemester: (currYear: number, currSeason: Season) => void;
    updateDegree: (event: ChangeEvent) => void;
    updateForm: () => void;
}): JSX.Element {
    //Visiblity of form
    const [visible, setVisible] = useState<boolean>(false);
    function changeVisibility() {
        setVisible(!visible);
    }
    //Semester Availability
    const [courseList, updateList] = useState<Course[]>(semester.ClassesTaking);
    const [intersection, changeIntersect] = useState<Course[]>([]);
    //Create course information
    const [courseID, setID] = useState<string>("");
    const [courseName, setName] = useState<string>("");
    const [courseDescription, setDescription] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    const [totalCredits, resetTotal] = useState<number>(semester.TotalCredits);
    //Change Semester List
    function changeList(newList: Course[]) {
        updateList(newList);
        semester.ClassesTaking = newList;
        console.log(semester.ClassesTaking);
        console.log(degree.SemesterList);
        updateDegree;
    }
    //reset taken
    function resetTaken(existing: Course) {
        existing.taken = false;
        existing.taken_String = "❌";
        updateDegree;
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
        updateDegree;
    };
    function changeTotal(credits: number) {
        resetTotal(credits);
        semester.TotalCredits = totalCredits;
        updateDegree;
        updateForm;
    }
    function removeCourse(courseID: string) {
        const course = courseList.filter(
            (course: Course): boolean => course.courseID === courseID
        );
        const findCourse = intersection.filter(
            (course: Course): boolean => course.courseID === courseID
        );
        if (findCourse.length >= 1) {
            resetTaken(findCourse[0]);
            changeIntersect(
                intersection.filter(
                    (course: Course): boolean => course.courseID !== courseID
                )
            );
        }
        changeList(
            courseList.filter(
                (course: Course): boolean => course.courseID !== courseID
            )
        );
        changeTotal(totalCredits - course[0].credits);
        updateDegree;
    }
    function removeSemesterReset(year: number, season: string) {
        resetState();
        removeSemester(year, season);
        updateDegree;
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
        changeList([...courseList, newCourse]);
        changeTotal(totalCredits + newCourse.credits);
        updateDegree;
        changeVisibility();
    }
    return (
        <div>
            <div>
                {/* <label className="semesterLabel">
                    {semester.SemesterSeason +
                        " " +
                        semester.year +
                        ": " +
                        semester.TotalCredits +
                        " Credits"}
                </label> */}
                <Table className="semesterTable">
                    <caption className="semesterLabel">
                        {semester.SemesterSeason +
                            " " +
                            semester.year +
                            ": " +
                            totalCredits +
                            " Credits"}
                    </caption>
                    <tr className="key">
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Number of Credits</th>
                        <th>Remove Course</th>
                    </tr>
                    {courseList.map((course: Course) => (
                        <tr key={course.courseID}>
                            <th>{course.courseID}</th>
                            <th>{course.name}</th>
                            <th className={"scroll"}>{course.description}</th>
                            <th>{course.credits}</th>
                            <th>
                                <Button
                                    onClick={() =>
                                        removeCourse(course.courseID)
                                    }
                                >
                                    Remove
                                </Button>
                            </th>
                        </tr>
                    ))}
                </Table>
                <p className="debug">
                    {(semester.TotalCredits = totalCredits)}
                    {updateDegree}
                </p>
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
                        updateDegree={updateDegree}
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
    changeTotal,
    updateDegree
}: {
    cList: Course[];
    degree: Degree;
    changeList: (value: Course[]) => void;
    intersection: Course[];
    changeIntersect: (value: Course[]) => void;
    totalCredits: number;
    changeTotal: (value: number) => void;
    updateDegree: (event: ChangeEvent) => void;
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
            updateDegree;
            setError(false);
            changeEVisibility();
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

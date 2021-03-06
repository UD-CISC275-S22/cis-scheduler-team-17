import React, { useState } from "react";
import "../App.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import {
    Course,
    Degree,
    Season,
    SemesterPlanner
} from "../interfaces/Course-Degree-Semester";
import { makeCourse } from "../interfaces/MakeDegree-MakeCourses";
import { CreateCourse } from "./CreateCourse";
import { AddExisting } from "./AddExisting";
import dropdown from "../CSS-Images/dropdown.jpg";
import dropup from "../CSS-Images/dropup.jpg";

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
    //Semester Collapse
    const [collapse, setCollapse] = useState<boolean>(false);
    function changeCollapse() {
        setCollapse(!collapse);
    }
    //Semester Availability
    const [courseList, updateList] = useState<Course[]>(
        semester.classes_taking
    );
    const [intersection, changeIntersect] = useState<Course[]>([]);
    //Create course information
    const [courseID, setID] = useState<string>("");
    const [courseName, setName] = useState<string>("");
    const [courseDescription, setDescription] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    const [totalCredits, resetTotal] = useState<number>(semester.total_credits);
    //Change Semester List
    function changeList(newList: Course[]) {
        updateList(newList);
        semester.classes_taking = newList;
        updateDegree;
    }
    //reset taken
    function resetTaken(existing: Course) {
        existing.taken = false;
        existing.taken_string = "???";
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
        semester.total_credits = totalCredits;
        updateDegree;
        updateForm;
    }
    function removeCourse(courseID: string) {
        const course = courseList.filter(
            (course: Course): boolean => course.course_id === courseID
        );
        const findCourse = intersection.filter(
            (course: Course): boolean => course.course_id === courseID
        );
        if (findCourse.length >= 1) {
            resetTaken(findCourse[0]);
            changeIntersect(
                intersection.filter(
                    (course: Course): boolean => course.course_id !== courseID
                )
            );
        }
        changeList(
            courseList.filter(
                (course: Course): boolean => course.course_id !== courseID
            )
        );
        const courseCredits = course.map(
            (course: Course): number => course.credits
        );
        const removedCredits = courseCredits.reduce(
            (currCredits: number, nextCredits: number) =>
                currCredits + nextCredits,
            0
        );
        changeTotal(totalCredits - removedCredits);
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
                <Table className="semesterTable">
                    <caption
                        className="semesterLabel"
                        data-testid="semesterLabel"
                    >
                        {semester.semester_season +
                            " " +
                            semester.year +
                            ": " +
                            totalCredits +
                            " Credits"}
                        <Button
                            data-testid="showHideCourses"
                            onClick={changeCollapse}
                            className={"dropdownBtn"}
                        >
                            {collapse ? (
                                <img
                                    src={dropdown}
                                    className={"icon"}
                                    alt={"Show Courses"}
                                />
                            ) : (
                                <img
                                    src={dropup}
                                    className={"icon"}
                                    alt={"Hide Courses"}
                                />
                            )}
                        </Button>
                    </caption>
                    <tr className="key">
                        <th>Course ID</th>
                        <th>Course Name</th>
                        <th>Description</th>
                        <th>Number of Credits</th>
                        <th>Remove Course</th>
                    </tr>
                    {!collapse &&
                        courseList.map((course: Course) => (
                            <tr key={course.course_id}>
                                <th>{course.course_id}</th>
                                <th>{course.name}</th>
                                <th>{course.description}</th>
                                <th>{course.credits}</th>
                                <th>
                                    <Button
                                        className="remove"
                                        data-testid="removeCourse"
                                        onClick={() =>
                                            removeCourse(course.course_id)
                                        }
                                    >
                                        Remove
                                    </Button>
                                </th>
                            </tr>
                        ))}
                </Table>
                <p className="debug">
                    {(semester.total_credits = totalCredits)}
                    {updateDegree}
                </p>
                <div>
                    <Container>
                        <Row>
                            <Col>
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
                            </Col>
                            <Col>
                                <AddExisting
                                    courseList={courseList}
                                    degree={degree}
                                    changeList={changeList}
                                    intersection={intersection}
                                    changeIntersect={changeIntersect}
                                    totalCredits={totalCredits}
                                    changeTotal={changeTotal}
                                    updateDegree={updateDegree}
                                ></AddExisting>
                            </Col>
                            <Col>
                                <Button
                                    data-testid="removeAllCourses"
                                    className={"remove"}
                                    onClick={resetState}
                                >
                                    Remove All Courses
                                </Button>
                            </Col>
                            <Col>
                                <Button
                                    data-testid="remove-sem"
                                    className={"remove"}
                                    onClick={() =>
                                        removeSemesterReset(
                                            semester.year,
                                            semester.semester_season
                                        )
                                    }
                                >
                                    Remove Semester
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

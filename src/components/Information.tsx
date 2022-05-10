import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course, Degree } from "../interfaces/Course-Degree-Semester";
import "../App.css";

export function Information({
    currentDegree,
    currentCourseName
}: {
    currentDegree: Degree;
    currentCourseName: string;
}): JSX.Element {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const findCourse = currentDegree.courses_required.filter(
        (myCourse: Course): boolean => myCourse.name === currentCourseName
    );
    const currentCourse = findCourse[0];
    return (
        <div>
            <Button
                onClick={() => setShowInfo(!showInfo)}
                className="makeInformationButton"
            >
                {showInfo ? "Less Information" : "More Information"}
            </Button>
            <div className="extraInfoLook" style={{ textAlign: "left" }}>
                {!showInfo ? (
                    <></>
                ) : (
                    <>
                        <strong>Course Description: </strong>
                        {currentCourse.description} <br></br>
                        <strong> Course Credits: </strong>
                        {currentCourse.credits} <br></br>
                        <strong>Semesters Available: </strong>
                        {currentCourse.semester_available_string} <br></br>
                        <strong>Pre-Requisite: </strong>
                        {currentCourse.prerecs.map(
                            (currentPreRec: Course) =>
                                currentPreRec.course_id +
                                currentPreRec.taken_string
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

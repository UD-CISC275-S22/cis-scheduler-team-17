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
    const findCourse = currentDegree.CoursesRequired.filter(
        (myCourse: Course): boolean => myCourse.name === currentCourseName
    );
    const currentCourse = findCourse[0];
    return (
        <div>
            <Button
                onClick={() => setShowInfo(!showInfo)}
                className="makeInformationButton"
            >
                More Information
            </Button>
            <div className="extraInfoLook" style={{ textAlign: "left" }}>
                {!showInfo ? (
                    <></>
                ) : (
                    <>
                        Course Description: {currentCourse.description}{" "}
                        <br></br>
                        Course Credits: {currentCourse.credits} <br></br>
                        Semesters Available:{" "}
                        {currentCourse.SemestersAvailableString} <br></br>
                        Pre-Requisite:
                        {currentCourse.prerecs.map(
                            (currentPreRec: Course) =>
                                currentPreRec.name + currentPreRec.taken_String
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Course, Degree } from "../interfaces/Course-Degree-Semester";
import "../App.css";
// This holds the course we are on and the degree we have

export function SelectCoursesTaken({
    degree
}: {
    degree: Degree;
}): JSX.Element {
    const [, setCurrentCourseName] = useState<string>(
        degree.CoursesRequired[0].name
    );
    const [progress, setProgress] = useState(0);
    //[currentTaken, setCurrentTaken]
    const [, setCurrentTaken] = useState<boolean>();

    function updateCourseTaken(event: React.ChangeEvent<HTMLInputElement>) {
        // this will update the currently selected course and will update my stuff
        setCurrentCourseName(event.target.value);
        const currentCourse = degree.CoursesRequired.filter(
            (currentCourse: Course): boolean =>
                event.target.value === currentCourse.name
        );
        const ourCourse = currentCourse[0];
        ourCourse.taken = !ourCourse.taken;
        setCurrentTaken(ourCourse.taken);
        ourCourse.taken_String = ourCourse.taken ? "✔️" : "❌";
    }
    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        // this handles the scrolling of the box
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
    };

    return (
        <div>
            <div>
                <Form.Label>
                    <strong>
                        Please Select The Courses You Have Already Taken
                    </strong>
                </Form.Label>
            </div>
            <div style={styles.container} onScroll={scrollHandler}>
                {degree.CoursesRequired.map((currentCourse: Course) => (
                    <div key={currentCourse.name}>
                        <Form.Check
                            type="checkbox"
                            id={currentCourse.name}
                            onChange={updateCourseTaken}
                            name="courses"
                            checked={currentCourse.taken === true}
                            value={currentCourse.name}
                            key={currentCourse.name}
                            label={
                                "Course Name: " +
                                currentCourse.name +
                                "...Taken: " +
                                currentCourse.taken_String
                            }
                        />
                        <Information
                            currentDegree={degree}
                            currentCourseName={currentCourse.name}
                        ></Information>
                    </div>
                ))}
            </div>
            {/**progress Bar */}
            <div style={styles.progressBar}>
                <div
                    style={{ ...styles.progressValue, width: `${progress}%` }}
                ></div>
            </div>
            <p style={styles.text}>{progress.toFixed(2)}%</p>
        </div>
    );
}

// Styling
const styles = {
    container: {
        width: 500,
        height: 600,
        margin: "30px auto",
        overflowY: "auto",
        overflowX: "hidden",
        background: "mintcream"
    },
    list: {
        width: "100%"
    },
    progressBar: {
        width: 600,
        height: 20,
        margin: "auto",
        backgroundColor: "#bbb"
    },
    progressValue: {
        height: "100%",
        backgroundColor: "steelblue"
    },
    text: {
        textAlign: "center"
    }
} as const;
{
    /** Code for the scrolly box and the progress bar used from https://www.kindacode.com/article/react-typescript-handling-onscroll-event/*/
}

function Information({
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
                        Course Name: {currentCourse.name} <br></br>
                        Course Description: {currentCourse.description}{" "}
                        <br></br>
                        Course Credits: {currentCourse.credits} <br></br>
                        Semesters Available:{" "}
                        {currentCourse.SemestersAvailableString} <br></br>
                        Pre-Requisite:
                        {currentCourse.prerecs.map(
                            (currentPreRec: Course) =>
                                currentPreRec.name + currentPreRec.taken_String
                        )}{" "}
                        <br></br>
                        Taken: {currentCourse.taken_String}
                    </>
                )}
            </div>
        </div>
    );
}

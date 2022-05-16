import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Course, Degree } from "../interfaces/Course-Degree-Semester";
import "../App.css";
import { Information } from "./Information";

export function SelectCoursesTaken({
    degree
}: {
    degree: Degree;
}): JSX.Element {
    const [, setCurrentCourseName] = useState<string>(
        degree.courses_required[0].name
    );
    const [progress, setProgress] = useState(0);
    const [, setCurrentTaken] = useState<boolean>();

    function updateCourseTaken(event: React.ChangeEvent<HTMLInputElement>) {
        // this will update the currently selected course and will update my stuff
        setCurrentCourseName(event.target.value);
        const currentCourse = degree.courses_required.filter(
            (currentCourse: Course): boolean =>
                event.target.value === currentCourse.name
        );
        const ourCourse = currentCourse[0];
        ourCourse.taken = !ourCourse.taken;
        setCurrentTaken(ourCourse.taken);
        ourCourse.taken_string = ourCourse.taken ? "✔️" : "❌";
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
            <Form.Label>
                <strong>
                    Please Select The Courses You Have Already Taken
                </strong>
            </Form.Label>
            <div style={styles.container} onScroll={scrollHandler}>
                {degree.courses_required.map((currentCourse: Course) => (
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
                                currentCourse.name +
                                " ... Taken: " +
                                currentCourse.taken_string
                            }
                        />
                        <Information
                            currentDegree={degree}
                            currentCourseName={currentCourse.name}
                        ></Information>
                    </div>
                ))}
            </div>
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
        width: "110%",
        height: 600,
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

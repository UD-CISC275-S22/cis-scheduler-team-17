import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { AllCourses, AllDegrees } from "../interfaces/AllCourses-AllDegrees";
import { Course, Degree } from "../interfaces/course-Degree-Semester";

export function SelectCoursesTaken(): JSX.Element {
    // this is going to be where the courses are printed
    UseYellows();
    const [currentDegree, setDegree] = useState<Degree>(AllDegrees[0]);
    const [progress, setProgress] = useState(0);
    const [currentCourseName, setCurrentCourseName] = useState<string>(
        AllCourses[0].name
    );
    const [currentTaken, setCurrentTaken] = useState<boolean>();

    function UseYellows() {
        // this is only here to get ris of the yellows in the code
        // eslint-disable-next-line no-constant-condition
        if (!true) {
            console.log(setDegree);
            console.log(currentCourseName);
            console.log(currentTaken);
        }
    }

    function updateCourseTaken(event: React.ChangeEvent<HTMLInputElement>) {
        // this will update the currently selected course and will update my stuff
        setCurrentCourseName(event.target.value);
        const currentCourse = currentDegree.CoursesRequired.filter(
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
                {currentDegree.CoursesRequired.map((currentCourse: Course) => (
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
                                " Course Description: " +
                                currentCourse.description +
                                " \n Course Credits: " +
                                currentCourse.credits +
                                " ...... Semesters Available: " +
                                currentCourse.SemestersAvailableString +
                                " ...... Pre Requisite: " +
                                currentCourse.prerecs.map(
                                    (currentPreRec: Course) =>
                                        currentPreRec.name +
                                        currentPreRec.taken_String
                                ) +
                                " ...... Taken: " +
                                currentCourse.taken_String
                            }
                        />
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

/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AllCourses } from "../interfaces/AllCourses-AllDegrees";
import { Course } from "../interfaces/course-Degree-Semester";

// simplifing the type definition of the change event
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function FindCourse(): JSX.Element {
    // state used to handle the users inputted answer
    const AllCoursesCopy = [...AllCourses];
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [list_Of_Possible_Answers, setListOfPossibleAnswers] = useState<
        Course[]
    >([...AllCourses]);
    const [progress, setProgress] = useState(0);
    const [currentTaken, setCurrentTaken] = useState<boolean>();

    function updateShortAnswer(event: ChangeEvent) {
        setUserAnswer(event.target.value);
        // allows us to update our list based on what is getting entered
        setListOfPossibleAnswers(
            AllCoursesCopy.filter(
                (currentCourse: Course): boolean =>
                    currentCourse.courseID.search(userAnswer) !== -1
            )
        );
    }

    function RefreshOptions() {
        setListOfPossibleAnswers(
            AllCoursesCopy.filter(
                (currentCourse: Course): boolean =>
                    currentCourse.courseID.search(userAnswer) !== -1
            )
        );
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
            <Form.Group controlId="CheckAnswer">
                <Form.Label>Insert Your Short Answer Responce Here:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={updateShortAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                Found ID:
                {list_Of_Possible_Answers.length === 0
                    ? " ❌ There are no courses matching your input"
                    : list_Of_Possible_Answers[0].courseID === userAnswer
                    ? "✔️"
                    : "Searching"}
            </div>
            <Button onClick={RefreshOptions}>Refresh Options</Button>
            <div style={styles.container} onScroll={scrollHandler}>
                {list_Of_Possible_Answers.map((currentCourse: Course) => (
                    <div key={currentCourse.name}>{currentCourse.courseID}</div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: 275,
        height: 300,
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

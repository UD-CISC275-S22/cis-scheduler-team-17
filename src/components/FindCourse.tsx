import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AllCourses } from "../interfaces/AllCourses-AllDegrees";
import { Course } from "../interfaces/Course-Degree-Semester";
import { EditInterface } from "./EditInterface";
import "../App.css";

// simplifing the type definition of the change event
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function FindCourse(): JSX.Element {
    // state used to handle the users inputted answer
    const allCourses = [...AllCourses];
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [listOfPossibleAnswers, setListOfPossibleAnswers] = useState<
        Course[]
    >([...AllCourses]);
    const [, setProgress] = useState(0);
    const [, setSelectedCourseName] = useState<string>();
    const [showSearch, updateShowSearch] = useState<boolean>(true);
    const [selectedCourse, updateSelectedCourse] = useState<Course>(
        AllCourses[0]
    );

    function updateShortAnswer(event: ChangeEvent) {
        setUserAnswer(event.target.value);
        // allows us to update our list based on what is getting entered
        setListOfPossibleAnswers(
            allCourses.filter(
                (currentCourse: Course): boolean =>
                    currentCourse.course_id.search(event.target.value) !== -1
            )
        );
    }

    function SelectCourse(selectedCourseID: string) {
        setSelectedCourseName(selectedCourseID);
        const id = allCourses.filter(
            (course: Course): boolean => course.course_id === selectedCourseID
        );
        updateSelectedCourse(id[0]);
        updateShowSearch(!showSearch);
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        // this handles the scrolling of the box
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
    };

    function sResult(courseID: string): string {
        // this function fixes my red issue
        if (courseID === userAnswer) {
            return "✔️";
        } else {
            return "Searching";
        }
    }

    return (
        <div>
            {showSearch ? (
                <div>
                    <label>
                        <strong>Search for Course to Edit</strong>
                    </label>
                    <Form.Group controlId="CheckAnswer">
                        <Form.Control
                            value={userAnswer}
                            onChange={updateShortAnswer}
                            placeholder={"Enter Course ID"}
                        ></Form.Control>
                    </Form.Group>
                    <div>
                        {listOfPossibleAnswers.length === 0
                            ? " ❌ There are no courses matching your input"
                            : sResult(listOfPossibleAnswers[0].course_id)}
                    </div>
                    <div style={styles.container} onScroll={scrollHandler}>
                        {listOfPossibleAnswers.map((currentCourse: Course) => (
                            <div key={currentCourse.name}>
                                {currentCourse.course_id}
                                <Button
                                    className={"makeInformationButton"}
                                    onClick={() =>
                                        SelectCourse(currentCourse.course_id)
                                    }
                                >
                                    Select Course
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <Button
                        onClick={() => SelectCourse("")}
                        className="makeInformationButton"
                    >
                        Return to Search
                    </Button>
                    <EditInterface Course2Edit={selectedCourse}></EditInterface>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        width: 375,
        height: 300,
        margin: "30px auto",
        overflowY: "auto",
        overflowX: "hidden",
        background: "mintcream"
    },
    list: {
        width: "100%"
    },

    progressValue: {
        height: "100%",
        backgroundColor: "steelblue"
    },
    text: {
        textAlign: "left"
    }
} as const;

/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AllCourses } from "../interfaces/AllCourses-AllDegrees";
import { Course } from "../interfaces/course-Degree-Semester";
import { EditInterface } from "./EditInterface";

// simplifing the type definition of the change event
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function FindCourse(): JSX.Element {
    // state used to handle the users inputted answer
    fixYellow();
    const AllCoursesCopy = [...AllCourses];
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [list_Of_Possible_Answers, setListOfPossibleAnswers] = useState<
        Course[]
    >([...AllCourses]);
    const [progress, setProgress] = useState(0);
    const [selectedCourseName, setSelectedCourseName] = useState<string>();
    const [showSearch, updateShowSearch] = useState<boolean>(true);
    const [SelectedCourse, updateSelectedCourse] = useState<Course>(
        AllCourses[0]
    );
    const [infoVisible, courseInfoVisible] = useState<boolean>(false);

    function fixYellow() {
        // eslint-disable-next-line no-constant-condition
        if (!true) {
            progress;
            selectedCourseName;
        }
    }

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

    function SelectCourse(SelectedCourseID: string) {
        setSelectedCourseName(SelectedCourseID);
        const ID = AllCoursesCopy.filter(
            (course: Course): boolean => course.courseID === SelectedCourseID
        );
        updateSelectedCourse(ID[0]);
        updateShowSearch(!showSearch);
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
                <Form.Control
                    value={userAnswer}
                    onChange={updateShortAnswer}
                ></Form.Control>
            </Form.Group>
            <div>
                {list_Of_Possible_Answers.length === 0
                    ? " ❌ There are no courses matching your input"
                    : list_Of_Possible_Answers[0].courseID === userAnswer
                    ? "✔️"
                    : "Searching"}
            </div>
            {showSearch ? (
                <div style={styles.container} onScroll={scrollHandler}>
                    {list_Of_Possible_Answers.map((currentCourse: Course) => (
                        <div key={currentCourse.name}>
                            {currentCourse.courseID}
                            <Button
                                onClick={() =>
                                    SelectCourse(currentCourse.courseID)
                                }
                            >
                                Select Course
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <Button onClick={() => SelectCourse("")}>
                        Search For Course
                    </Button>
                    <Button onClick={() => courseInfoVisible(!infoVisible)}>
                        View Course Details
                    </Button>
                    {infoVisible ? (
                        <div>
                            <br></br>
                            You Have Selected the Course {selectedCourseName} to
                            Edit
                            <br></br>
                            The Current Course ID:{" "}
                            {SelectedCourse.courseID + "\n"}
                            <br></br>
                            The Current Course Name:{" "}
                            {SelectedCourse.name + "\n"}
                            <br></br>
                            The Current Course Description:
                            {SelectedCourse.description + "\n"}
                            <br></br>
                            The Current Course Credits: {SelectedCourse.credits}
                            <br></br>
                        </div>
                    ) : (
                        <div>Edit Your Course!!!</div>
                    )}
                    <EditInterface Course2Edit={SelectedCourse}></EditInterface>
                </div>
            )}
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

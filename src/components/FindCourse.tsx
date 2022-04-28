/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AllCourses } from "../interfaces/AllCourses-AllDegrees";
import { Course, Degree } from "../interfaces/course-Degree-Semester";
import { EditInterface } from "./EditInterface";

// simplifing the type definition of the change event
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function FindCourse({ degree }: { degree: Degree }): JSX.Element {
    // state used to handle the users inputted answer
    fixYellow();
    const [userAnswer, setUserAnswer] = useState<string>("");
    const [list_Of_Possible_Answers, setListOfPossibleAnswers] = useState<
        Course[]
    >(degree.CoursesRequired);
    const [progress, setProgress] = useState(0);
    const [selectedCourseName, setSelectedCourseName] = useState<string>();
    const [showSearch, updateShowSearch] = useState<boolean>(true);
    const [SelectedCourse, updateSelectedCourse] = useState<Course>(
        AllCourses[0]
    );

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
            degree.CoursesRequired.filter(
                (currentCourse: Course): boolean =>
                    currentCourse.courseID.search(userAnswer) !== -1
            )
        );
    }

    function SelectCourse(SelectedCourseID: string) {
        setSelectedCourseName(SelectedCourseID);
        const ID = degree.CoursesRequired.filter(
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
            {showSearch ? (
                <div>
                    <div>Please Input the Course ID you want to find</div>
                    {/**This is the searchbar */}
                    <Form.Group controlId="CheckAnswer">
                        <Form.Control
                            value={userAnswer}
                            onChange={updateShortAnswer}
                        ></Form.Control>
                    </Form.Group>
                    <div>
                        {list_Of_Possible_Answers.length === 0
                            ? " ❌ There are no courses matching your input"
                            : list_Of_Possible_Answers[0].courseID ===
                              userAnswer
                            ? "✔️"
                            : "Searching"}
                    </div>
                    {/**This is where the scrolly box with the selectors are held*/}
                    <div style={styles.container} onScroll={scrollHandler}>
                        {list_Of_Possible_Answers.map(
                            (currentCourse: Course) => (
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
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    <Button onClick={() => SelectCourse("")}>
                        Search For Course
                    </Button>
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

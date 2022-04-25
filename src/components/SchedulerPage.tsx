import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "../App.css";
import { Course, Degree, Season } from "../interfaces/course-Degree-Semester";
import { currentSelectedDegree } from "./DropdownDegrees";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function SchedulerPage({
    changeHomepage
}: {
    changeHomepage: () => void;
}): JSX.Element {
    const seasons: Season[] = ["Fall"];
    const [season, setSeason] = useState<string>(seasons[0]);

    function addSemester(): JSX.Element {
        return (
            <div>
                <Form.Group controlId="Seasons">
                    <Form.Label> Season: </Form.Label>
                    <Form.Select
                        className="dropdownForm"
                        value={season}
                        onChange={(event: ChangeEvent) =>
                            setSeason(event.target.value)
                        }
                    >
                        {seasons.map((s: string) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label> Year: </Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Button onClick={() => showSemester}> Add Semester</Button>
            </div>
        );
    }

    function showSemester(): JSX.Element {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th> Semester + Year </th>
                        </tr>
                        <tr>
                            <th>
                                {/* <Button onClick={() => deleteSemester()}></Button> */}
                            </th>
                        </tr>
                    </thead>
                    <tr> Course ID </tr>
                    <tr> Number of Credits </tr>
                    <tbody>All of the data</tbody>
                </Table>
            </div>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>You are planning a [] degree</h3>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <span>
                                Plan name [take in Degree plan selection]
                            </span>
                            <div> {addSemester()} </div>
                        </Col>
                        <Col>
                            <span>
                                <CoursesLists></CoursesLists>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <span> Number of credits needed: </span>
                    </Row>
                </Container>
            </div>
            <div>{showSemester()}</div>
            <footer className="back">
                <Button className="backButton" onClick={changeHomepage}>
                    Back
                </Button>
            </footer>
        </div>
    );
}

function CoursesLists(): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>Courses You Have Taken</div>
                        <PrintDegreesLists taken={true}></PrintDegreesLists>
                    </Col>
                    <Col>
                        <div>Courses You Have Not Taken</div>
                        <PrintDegreesLists taken={false}></PrintDegreesLists>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
function PrintDegreesLists({ taken }: { taken: boolean }): JSX.Element {
    // this is going to be where the courses are printed
    UseYellows();
    const [currentDegree, setDegree] = useState<Degree>(currentSelectedDegree);
    const [currentCourseName, setCurrentCourseName] = useState<string>(
        currentSelectedDegree.CoursesRequired[0].name
    );
    const [printCourses, setPrintTakenOrNot] = useState<Course[]>(
        currentDegree.CoursesRequired.filter(
            (course: Course): boolean => course.taken === taken
        )
    );
    const [progress, setProgress] = useState(0);
    const [currentTaken, setCurrentTaken] = useState<boolean>();

    function UseYellows() {
        // this is only here to get ris of the yellows in the code
        // eslint-disable-next-line no-constant-condition
        if (!true) {
            console.log(currentCourseName);
            console.log(currentTaken);
            console.log(progress);
            setCurrentCourseName("HOW");
            setCurrentTaken(false);
        }
    }

    function updateList() {
        setDegree(currentSelectedDegree);
        // updating our list
        setPrintTakenOrNot(
            currentDegree.CoursesRequired.filter(
                (course: Course): boolean => course.taken === taken
            )
        );
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        // this handles the scrolling of the box
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;
        setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
        setDegree(currentSelectedDegree);
        // updating our list
        setPrintTakenOrNot(
            currentDegree.CoursesRequired.filter(
                (course: Course): boolean => course.taken === taken
            )
        );
    };

    return (
        <div>
            <Button onClick={updateList}>Refresh</Button>
            <div style={styles.container} onScroll={scrollHandler}>
                {printCourses.map((currentCourse: Course) => (
                    <div key={currentCourse.name}>
                        Course ID: {currentCourse.courseID}
                        {currentCourse.taken_String}
                        <br></br>
                        Pre Requisite:
                        {currentCourse.prerecs.map(
                            (currentPreRec: Course) =>
                                currentPreRec.courseID +
                                " " +
                                currentPreRec.taken_String +
                                "\n"
                        )}
                        <br></br>
                        ____________
                    </div>
                ))}
            </div>
        </div>
    );
}
// Styling
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
{
    /** Code for the scrolly box and the progress bar used from https://www.kindacode.com/article/react-typescript-handling-onscroll-event/*/
}

export default SchedulerPage;

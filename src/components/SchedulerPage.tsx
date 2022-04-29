import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../App.css";
import { MakeSemester } from "./MakeSemester";
//interfaces
import {
    Course,
    Degree,
    Season,
    SeasonsList,
    SemesterPlanner
} from "../interfaces/course-Degree-Semester";
import { ExportCSV } from "./ExportCSV";
//import { currentSelectedDegree } from "./DropdownDegrees";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function SchedulerPage({
    changeHomepage,
    degree,
    updateDegree
}: {
    changeHomepage: () => void;
    degree: Degree;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    //seasons dropdown state
    const seasons = [...SeasonsList];
    const [season, setSeason] = useState<Season>(seasons[0]);
    //year state
    const [year, setYear] = useState<number>(2022);
    //semester state
    const [showSemForm, setSemesterForm] = useState<boolean>(false);
    const [updateSemesterList, setSemesterList] = useState<SemesterPlanner[]>(
        degree.SemesterList
    );

    function getSeason(): JSX.Element {
        return (
            <Form.Group controlId="Seasons">
                <Form.Label> Season: </Form.Label>
                <Form.Select
                    value={season}
                    onChange={(event: ChangeEvent) =>
                        setSeason(event.target.value)
                    }
                >
                    {SeasonsList.map((s: Season) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        );
    }
    function getYear(): JSX.Element {
        return (
            <Form.Group controlId="Years">
                <Form.Label> Year: </Form.Label>
                <Form.Control
                    type="number"
                    value={year}
                    onChange={(event: ChangeEvent) =>
                        setYear(parseInt(event.target.value))
                    }
                />
            </Form.Group>
        );
    }
    function updateSemesterForm() {
        setSemesterForm(!showSemForm);
    }
    function addSemester() {
        const currYear = year;
        const currSeason = season;
        const newSemester: SemesterPlanner = {
            ClassesTaking: [],
            year: currYear,
            SemesterSeason: currSeason,
            TotalCredits: 0
        };
        setSemesterList([...updateSemesterList, newSemester]);
        degree.SemesterList = [...degree.SemesterList, newSemester];
        updateDegree;
    }
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>
                    You are planning <strong>{degree.name}</strong> degree
                </h3>
            </div>
            {console.log(updateSemesterList)}
            <div>
                <Row>
                    <Col>
                        <label>
                            Number of Credits Needed:
                            {" " + degree.CreditsRequired}
                        </label>
                    </Col>
                    <Col>
                        <label>Number of Credits Planned: {}</label>
                    </Col>
                    <Col>
                        <label>Number of Credits Unplanned: </label>
                    </Col>
                </Row>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <label>
                                Plan Name: <strong>{degree.name}</strong>
                            </label>
                            <div>
                                <Button onClick={() => updateSemesterForm()}>
                                    {" "}
                                    Show Add Semester Form
                                </Button>
                                {showSemForm && (
                                    <div>
                                        {getSeason()}
                                        {getYear()}
                                        <Button
                                            onClick={() => {
                                                addSemester();
                                                updateSemesterForm();
                                            }}
                                        >
                                            Add Semester
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <br></br>
                            <div>
                                {updateSemesterList.map(
                                    (semester: SemesterPlanner) => (
                                        <>
                                            <MakeSemester
                                                key={
                                                    semester.SemesterSeason +
                                                    semester.year
                                                }
                                                semester={semester}
                                                degree={degree}
                                            ></MakeSemester>
                                            <br></br>
                                        </>
                                    )
                                )}
                            </div>
                        </Col>
                        <Col>
                            <span>
                                <CoursesLists degree={degree}></CoursesLists>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <ExportCSV semesters={updateSemesterList}></ExportCSV>
            </div>
            <footer>
                <Button className="backButton" onClick={changeHomepage}>
                    Back
                </Button>
            </footer>
        </div>
    );
}

function CoursesLists({ degree }: { degree: Degree }): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <label>Courses Taken or Planned</label>
                        <PrintDegreesLists
                            taken={true}
                            degree={degree}
                        ></PrintDegreesLists>
                    </Col>
                    <Col>
                        <label>Courses Not Taken or Planned </label>
                        <PrintDegreesLists
                            taken={false}
                            degree={degree}
                        ></PrintDegreesLists>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
function PrintDegreesLists({
    taken,
    degree
}: {
    taken: boolean;
    degree: Degree;
}): JSX.Element {
    // this is going to be where the courses are printed
    UseYellows();
    const [currentDegree, setDegree] = useState<Degree>(degree);
    const [currentCourseName, setCurrentCourseName] = useState<string>(
        degree.CoursesRequired[0].name
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
        setDegree(degree);
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
        setDegree(degree);
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

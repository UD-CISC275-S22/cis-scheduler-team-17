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
import { EditCourse } from "./EditCourse";
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
    //semester state
    const [showSemForm, setSemesterForm] = useState<boolean>(false);
    // const [updateSemesterList, setSemesterList] = useState<SemesterPlanner[]>(
    //     degree.SemesterList
    // );
    const [semExistsError, setSemesterExists] = useState<boolean>(false);
    //update degree semester list
    function setSemesterList(newList: SemesterPlanner[]) {
        updateSemesterForm();
        degree.SemesterList = newList;
    }
    //seasons dropdown state
    const seasons = [...SeasonsList];
    const [season, setSeason] = useState<Season>(seasons[0]);
    //year state
    const [year, setYear] = useState<number>(2022);
    function getSeason(): JSX.Element {
        updateDegree;
        return (
            <Form.Group controlId="Seasons">
                <Form.Label> Season: </Form.Label>
                <Form.Select
                    value={season}
                    onChange={(event: ChangeEvent) =>
                        setSeason(event.target.value)
                    }
                >
                    {seasons.map((s: Season) => (
                        <option key={s} value={s}>
                            {s}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        );
    }
    function getYear(): JSX.Element {
        updateDegree;
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
        updateDegree;
        setSemesterForm(!showSemForm);
    }
    function addSemester() {
        const currYear = year;
        const currSeason = season;

        const contains = degree.SemesterList.find(
            (c: SemesterPlanner): boolean =>
                c.SemesterSeason === season && c.year === year
        );
        if (contains) {
            setSemesterExists(true);
            //return;
        } else {
            setSemesterExists(false);
            const newSemester: SemesterPlanner = {
                ClassesTaking: [],
                year: currYear,
                SemesterSeason: currSeason,
                TotalCredits: 0
            };
            //setSemesterList([...updateSemesterList, newSemester]);
            degree.SemesterList = [...degree.SemesterList, newSemester];
            updateDegree;
        }
    }
    function removeSemester(currYear: number, currSeason: Season) {
        updateDegree;
        //console.log(year + " : " + season);
        // setSemesterList(
        //     updateSemesterList.filter(
        //         (sem: SemesterPlanner): boolean =>
        //             sem.SemesterSeason != currSeason || sem.year != currYear
        //     )
        // );
        degree.SemesterList = degree.SemesterList.filter(
            (sem: SemesterPlanner): boolean =>
                sem.SemesterSeason != currSeason || sem.year != currYear
        );
        updateSemesterForm();
    }
    function removeAllSemesters() {
        setSemesterList([]);
        degree.CoursesRequired.map((course: Course) => (course.taken = false));
        degree.CoursesRequired.map(
            (course: Course) => (course.taken_String = "❌")
        );
        updateSemesterForm();
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
            <div>
                <Row>
                    <Col>
                        <label>
                            Number of Credits Needed:
                            {" " + degree.CreditsRequired}
                        </label>
                    </Col>
                    {
                        //<Col>
                        //<label>Number of Credits Planned: </label>
                        //</Col>
                        //<Col>
                        //<label>Number of Credits Unplanned: </label>
                        //</Col>
                    }
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
                                <Button
                                    data-testid="show/hide"
                                    onClick={() => updateSemesterForm()}
                                >
                                    {" "}
                                    {showSemForm
                                        ? "Hide Add Semester Form"
                                        : "Show Add Semester Form"}
                                </Button>
                                <Button
                                    className={"remove"}
                                    onClick={removeAllSemesters}
                                >
                                    Reset Plan
                                </Button>
                                {showSemForm && (
                                    <div>
                                        {getSeason()}
                                        {getYear()}
                                        <Button
                                            onClick={() => {
                                                addSemester();
                                                updateSemesterForm();
                                                updateDegree;
                                            }}
                                        >
                                            Add Semester
                                        </Button>
                                    </div>
                                )}
                                {semExistsError && (
                                    <p className="error">
                                        This semester already exists. Please
                                        choose a different year and/or season
                                    </p>
                                )}
                            </div>
                            <br></br>
                            <div>
                                {degree.SemesterList.map(
                                    (semester: SemesterPlanner) => (
                                        <>
                                            <MakeSemester
                                                key={
                                                    semester.SemesterSeason +
                                                    semester.year
                                                }
                                                semester={semester}
                                                degree={degree}
                                                removeSemester={removeSemester}
                                                updateDegree={updateDegree}
                                            ></MakeSemester>
                                            <br></br>
                                        </>
                                    )
                                )}
                            </div>
                        </Col>
                        <Col>
                            <span>
                                <CoursesLists
                                    degree={degree}
                                    updateDegree={updateDegree}
                                ></CoursesLists>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <ExportCSV degree={degree}></ExportCSV>
            </div>
            <footer>
                <Button className="backButton" onClick={changeHomepage}>
                    Back
                </Button>
            </footer>
        </div>
    );
}

function CoursesLists({
    degree,
    updateDegree
}: {
    degree: Degree;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <label>Courses Taken or Planned</label>
                        <PrintDegreesLists
                            taken={true}
                            degree={degree}
                            updateDegree={updateDegree}
                        ></PrintDegreesLists>
                    </Col>
                    <Col>
                        <label>Courses Not Taken or Planned </label>
                        <PrintDegreesLists
                            taken={false}
                            degree={degree}
                            updateDegree={updateDegree}
                        ></PrintDegreesLists>
                    </Col>
                </Row>
                <EditCourse></EditCourse>
            </Container>
        </div>
    );
}
function PrintDegreesLists({
    taken,
    degree,
    updateDegree
}: {
    taken: boolean;
    degree: Degree;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    // this is going to be where the courses are printed
    const [currentDegree, setDegree] = useState<Degree>(degree);
    // const [currentCourseName, setCurrentCourseName] = useState<string>(
    //     degree.CoursesRequired[0].name
    // );
    const [printCourses, setPrintTakenOrNot] = useState<Course[]>(
        currentDegree.CoursesRequired.filter(
            (course: Course): boolean => course.taken === taken
        )
    );
    const [progress, setProgress] = useState(0);
    //const [currentTaken, setCurrentTaken] = useState<boolean>();

    function updateList() {
        updateDegree;
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
        setProgress(
            progress + ((scrollTop + containerHeight) / scrollHeight) * 100
        );
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
            <Button onClick={updateList}>Refresh {taken ? "✔️" : "❌"}</Button>
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

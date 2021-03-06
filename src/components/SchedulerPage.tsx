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
} from "../interfaces/Course-Degree-Semester";
import { ExportCSV } from "./ExportCSV";
import { CoursesLists } from "./CourseLists";
import { ImportCSV } from "./ImportCSV";

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
    //import states
    const [importView, setImport] = useState<boolean>(false);
    const changeImportView = () => {
        setImport(!importView);
    };
    //semester state
    const [showSemForm, setSemesterForm] = useState<boolean>(false);
    const [semExistsError, setSemesterExists] = useState<boolean>(false);
    //update degree semester list
    function setSemesterList(newList: SemesterPlanner[]) {
        updateSemesterForm();
        degree.semester_list = newList;
    }
    //seasons dropdown state
    const seasons = [...SeasonsList];
    const [season, setSeason] = useState<Season>(seasons[0]);
    //year state
    const [year, setYear] = useState<number>(2022);

    // season form
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

    // year form
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

    // add semester button to semester list
    function addSemester() {
        const currYear = year;
        const currSeason = season;

        const contains = degree.semester_list.find(
            (c: SemesterPlanner): boolean =>
                c.semester_season === season && c.year === year
        );
        if (contains) {
            setSemesterExists(true);
            //return;
        } else {
            setSemesterExists(false);
            const newSemester: SemesterPlanner = {
                classes_taking: [],
                year: currYear,
                semester_season: currSeason,
                total_credits: 0
            };
            degree.semester_list = [...degree.semester_list, newSemester];
            updateDegree;
        }
    }

    //remove semester from semester list
    function removeSemester(currYear: number, currSeason: Season) {
        updateDegree;
        degree.semester_list = degree.semester_list.filter(
            (sem: SemesterPlanner): boolean =>
                sem.semester_season != currSeason || sem.year != currYear
        );
        updateSemesterForm();
    }

    //reset plan
    function removeAllSemesters() {
        setSemesterList([]);
        degree.courses_required.map((course: Course) => (course.taken = false));
        degree.courses_required.map(
            (course: Course) => (course.taken_string = "???")
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
                <label>
                    Number of Credits Needed:
                    {" " + degree.credits_required}
                </label>
            </div>
            <div>
                <Container>
                    <Col>
                        <Row>
                            <div>
                                <Button
                                    className="addSemester"
                                    data-testid="show/hide"
                                    onClick={() => updateSemesterForm()}
                                >
                                    {" "}
                                    {showSemForm ? "Hide Form" : "Add Semester"}
                                </Button>
                                <Button
                                    data-testid="reset-plan"
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
                                            data-testid="add-sem"
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
                                    <p
                                        className="error"
                                        data-testid="sem-error"
                                    >
                                        This semester already exists. Please
                                        choose a different year and/or season
                                    </p>
                                )}
                            </div>
                        </Row>
                        <Row>
                            {degree.semester_list.map(
                                (semester: SemesterPlanner) => (
                                    <>
                                        <MakeSemester
                                            key={
                                                semester.semester_season +
                                                semester.year
                                            }
                                            semester={semester}
                                            degree={degree}
                                            removeSemester={removeSemester}
                                            updateDegree={updateDegree}
                                            updateForm={updateSemesterForm}
                                        ></MakeSemester>
                                        <br></br>
                                    </>
                                )
                            )}
                        </Row>
                        <hr />
                        <Row>
                            <span>
                                <CoursesLists degree={degree}></CoursesLists>
                            </span>
                        </Row>
                    </Col>
                </Container>
            </div>
            <div>
                <Container>
                    <hr />
                    <Row>
                        <Col>
                            <ExportCSV degree={degree}></ExportCSV>
                        </Col>
                        <Col>
                            <Button
                                data-testid="import-bttn"
                                className={"makeInformationButton"}
                                onClick={changeImportView}
                            >
                                {importView ? "Close Import" : "Import CSV"}
                            </Button>
                        </Col>
                    </Row>
                    {importView && (
                        <div>
                            <ImportCSV></ImportCSV>
                        </div>
                    )}
                </Container>
            </div>
            <div>
                <footer>
                    <Button
                        data-testid="back-to-homepage"
                        className="backButton"
                        onClick={changeHomepage}
                    >
                        Back
                    </Button>
                </footer>
            </div>
        </div>
    );
}

export default SchedulerPage;

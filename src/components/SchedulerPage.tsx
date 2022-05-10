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
            degree.SemesterList = [...degree.SemesterList, newSemester];
            updateDegree;
        }
    }
    function removeSemester(currYear: number, currSeason: Season) {
        updateDegree;
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
                </Row>
            </div>
            <div>
                <Container>
                    <Col>
                        <Row>
                            <label>
                                Plan Name: <strong>{degree.name}</strong>
                            </label>
                            <div>
                                <Button
                                    className="addSemester"
                                    onClick={() => updateSemesterForm()}
                                >
                                    {" "}
                                    {showSemForm ? "Hide Form" : "Add Semester"}
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
                                                updateForm={updateSemesterForm}
                                            ></MakeSemester>
                                            <br></br>
                                        </>
                                    )
                                )}
                            </div>
                        </Row>
                        <Row>
                            <span>
                                <CoursesLists
                                    degree={degree}
                                    updateDegree={updateDegree}
                                ></CoursesLists>
                            </span>
                        </Row>
                    </Col>
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

export default SchedulerPage;

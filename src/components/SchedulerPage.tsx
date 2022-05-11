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
        degree.semester_list = newList;
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
    function removeSemester(currYear: number, currSeason: Season) {
        updateDegree;
        degree.semester_list = degree.semester_list.filter(
            (sem: SemesterPlanner): boolean =>
                sem.semester_season != currSeason || sem.year != currYear
        );
        updateSemesterForm();
    }
    function removeAllSemesters() {
        setSemesterList([]);
        degree.courses_required.map((course: Course) => (course.taken = false));
        degree.courses_required.map(
            (course: Course) => (course.taken_string = "❌")
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
                        </Row>
                        <Row>
                            <div>
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
                            </div>
                        </Row>
                        <hr />
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

import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../App.css";
import { MakeSemester } from "./MakeSemester";
//interfaces
import {
    Degree,
    Season,
    SeasonsList,
    SemesterPlanner
} from "../interfaces/course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function SchedulerPage({
    changeHomepage,
    degree
}: {
    changeHomepage: () => void;
    degree: Degree;
}): JSX.Element {
    //seasons dropdown state
    const seasons = [...SeasonsList];
    const [season, setSeason] = useState<Season>(seasons[0]);
    //year state
    const [year, setYear] = useState<number>(2022);
    //semester state
    const [showSemForm, setSemesterForm] = useState<boolean>(false);

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
    function updateSemester() {
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
        degree.SemesterList = [...degree.SemesterList, newSemester];
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
                <Container>
                    <Row>
                        <Col>
                            <span>
                                Plan name [take in Degree plan selection]
                            </span>
                            <div>
                                <Button onClick={() => updateSemester()}>
                                    {" "}
                                    Show Add Semester Form
                                </Button>
                                {showSemForm && (
                                    <div>
                                        {getSeason()}
                                        {getYear()}
                                        <Button onClick={() => addSemester()}>
                                            Add Semester
                                        </Button>
                                    </div>
                                )}
                            </div>
                            <div>
                                <MakeSemester
                                    currentList={[]}
                                    semesterList={degree.SemesterList}
                                ></MakeSemester>
                            </div>
                        </Col>
                        <Col>
                            <span> Courses </span>
                        </Col>
                    </Row>
                    <Row>
                        <span> Number of credits needed: </span>
                    </Row>
                </Container>
            </div>
            {/* <div>{showSemester()}</div> */}
            <footer className="back">
                <Button className="backButton" onClick={changeHomepage}>
                    Back
                </Button>
            </footer>
        </div>
    );
}

export default SchedulerPage;

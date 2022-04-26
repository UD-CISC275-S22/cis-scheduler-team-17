import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../App.css";
import {
    SeasonsList,
    SemesterPlanner
} from "../interfaces/course-Degree-Semester";
import { Season } from "../interfaces/course-Degree-Semester";
import { MakeSemester } from "./MakeSemester";
//interfaces
import { Degree } from "../interfaces/course-Degree-Semester";

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
    const [newSem, setNewSem] = useState<boolean>(false);

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
        setNewSem(!newSem);
    }
    function addSemester() {
        const newSemester = {
            ClassesTaking: [],
            year: year,
            SemesterSeason: season,
            TotalCredits: 0
        };
        //const newSemList = [...degree.SemesterList, newSemester];
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
                                {getSeason()}
                                {getYear()}
                                <Button
                                    onClick={() => {
                                        updateSemester();
                                        addSemester();
                                    }}
                                >
                                    Add Semester
                                </Button>
                            </div>
                            {newSem && (
                                <div>
                                    <MakeSemester
                                        currentList={[]}
                                        year={year}
                                        season={season}
                                        degree={degree}
                                        semesterList={degree.SemesterList}
                                    ></MakeSemester>
                                </div>
                            )}
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

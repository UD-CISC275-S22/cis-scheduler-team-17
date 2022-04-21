import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "../App.css";
import { SeasonsList } from "../interfaces/course-Degree-Semester";
import { Season } from "../interfaces/course-Degree-Semester";
//import Homepage from "./Homepage";
//interfaces
//import { AllDegrees } from "../interfaces/AllCourses-AllDegrees";
//import { allCourses } from "../interfaces/AllCourses-AllDegrees";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function SchedulerPage({
    changeHomepage
}: {
    changeHomepage: () => void;
}): JSX.Element {
    //seasons dropdown state
    const seasons = [...SeasonsList];
    const [season, setSeason] = useState<Season>(seasons[0]);
    //year state
    const [year, setYear] = useState<number>(2022);
    //semester state
    //const [semester, setSemester] = useState<string>("");
    //const [semesterList, setSemesterList] = useState<string[]>([]);

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
    // function addSemester() {
    //     if (!semesterList.includes(semester) && semester != "") {
    //         setSemesterList([...semesterList, semester]);
    //     }
    //     setSemester("");
    // }
    // function showSemester(): JSX.Element {
    //     return (
    //         <div>
    //             <Table>
    //                 <thead>
    //                     <tr>
    //                         <th>
    //                             {" "}
    //                             {year} {season}
    //                         </th>
    //                     </tr>
    //                     <tr>
    //                         <th>
    //                             {/* <Button onClick={() => deleteSemester()}></Button> */}
    //                         </th>
    //                     </tr>
    //                 </thead>
    //                 <tr> Course ID </tr>
    //                 <tr> Number of Credits </tr>
    //                 <tbody>All of the data</tbody>
    //             </Table>
    //         </div>
    //     );
    // }
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
                            <div>
                                {getSeason()}
                                {getYear()}
                                {}
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

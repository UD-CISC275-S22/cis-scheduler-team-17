import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "../App.css";
//import Homepage from "./Homepage";
//interfaces
import { AllDegrees } from "../interfaces/AllCourses-AllDegrees";
import { allCourses } from "../interfaces/AllCourses-AllDegrees";

export function SchedulerPage({
    changeHomepage
}: {
    changeHomepage: () => void;
}): JSX.Element {
    function addSemester(): JSX.Element {
        return (
            <div>
                <Form.Group>
                    <Form.Label> Season: </Form.Label>
                    <Form.Select>
                        <option>Fall</option>
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
                            <span> Courses </span>
                        </Col>
                    </Row>
                    <Row>
                        <span> Number of credits needed: </span>
                    </Row>
                </Container>
            </div>
            <footer className="footer">
                <Button onClick={changeHomepage}>Back</Button>
            </footer>
        </div>
    );
}

export default SchedulerPage;

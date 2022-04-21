import React from "react";
import { Button, Row, Col, Table } from "react-bootstrap";
import "../App.css";
import { Course } from "../interfaces/course-Degree-Semester";
import { PoolCourses } from "./PoolCourses";
//import Homepage from "./Homepage";

export function SchedulerPage({
    changeHomepage
}: {
    changeHomepage: () => void;
}): JSX.Element {
    /*function showSemester(): JSX.Element {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th> Semester + Year </th>
                        </tr>
                        <tr>
                            <th>
                                {<Button onClick={() => deleteSemester()}></Button>}
                            </th>
                        </tr>
                    </thead>
                    <tr> Course ID </tr>
                    <tr> Number of Credits </tr>
                    <tbody>All of the data</tbody>
                </Table>
            </div>
        );
    }*/
    const currentCourses: Course[] = [];
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>You are planning a [] degree</h3>
            </div>
            <div>
                <Row>
                    {/*<Col>{showSemester()}</Col>*/}
                    <Col>
                        <PoolCourses currentList={currentCourses} />
                    </Col>
                    <Col>Place Holder</Col>
                </Row>
            </div>
            <footer className="back">
                <Button className="backButton" onClick={changeHomepage}>
                    Back
                </Button>
            </footer>
        </div>
    );
}

export default SchedulerPage;

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { SelectCoursesTaken } from "./Select_Courses_Taken";
//import { UnderConstruction } from "./Underconstruction";
//import SchedulerPage from "./SchedulerPage";

function Homepage({
    changeHomepage
}: {
    changeHomepage: () => void;
}): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <span>Degree</span>
                        </Col>
                        <Col>
                            <SelectCoursesTaken></SelectCoursesTaken>
                        </Col>
                        <Col>
                            <Button onClick={changeHomepage}>
                                Make Schedule
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer className="footer">
                Constributers: Team 17
                <br></br>Rosemarie Filano, Sydney Hester, Zoe Valladares
            </footer>
        </div>
    );
}

export default Homepage;

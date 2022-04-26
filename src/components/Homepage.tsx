import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { DropdownDegrees } from "./DropdownDegrees";
import { EditCourse } from "./EditCourse";
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
            <div className="body">
                <Container>
                    <Row>
                        <Col>
                            <DropdownDegrees></DropdownDegrees>
                        </Col>
                        <Col>
                            <SelectCoursesTaken></SelectCoursesTaken>
                        </Col>
                        <Col>
                            <Button
                                className="makeButton"
                                onClick={changeHomepage}
                            >
                                Make Schedule
                            </Button>
                            <EditCourse></EditCourse>
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

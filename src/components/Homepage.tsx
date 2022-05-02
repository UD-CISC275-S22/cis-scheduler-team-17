import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { DropdownDegrees } from "./DropdownDegrees";
//interfaces
import { Degree } from "../interfaces/course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
import { SelectCoursesTaken } from "./Select_Courses_Taken";

//import { UnderConstruction } from "./Underconstruction";
//import SchedulerPage from "./SchedulerPage";

function Homepage({
    changeHomepage,
    degrees,
    degree,
    updateDegree
}: {
    changeHomepage: () => void;
    degrees: Degree[];
    degree: Degree;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Degree Planner
            </header>
            <div className="body">
                <Container>
                    <Row>
                        <Col>
                            <DropdownDegrees
                                degrees={degrees}
                                degree={degree}
                                updateDegree={updateDegree}
                            ></DropdownDegrees>
                        </Col>
                        <Col>
                            <SelectCoursesTaken
                                degree={degree}
                            ></SelectCoursesTaken>
                        </Col>
                        <Col>
                            <Button
                                className="makeButton"
                                onClick={changeHomepage}
                            >
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

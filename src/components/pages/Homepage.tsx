import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../App.css";

function Homepage(): JSX.Element {
    const nav = useNavigate();
    const goToScheduler = () => {
        nav("/make-schedule");
    };
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                Welcome to Schedule Planner! Click a current plan or create a
                new plan to get started.
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <span>Degree</span>
                        </Col>
                        <Col>
                            <span>Taken Courses</span>
                        </Col>
                        <Col>
                            <Button onClick={goToScheduler}>
                                Make Schedule
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <UnderConstruction></UnderConstruction> */}
            <footer className="footer">
                Constributers: Team 17
                <br></br>Rosemarie Filano, Sydney Hester, Zoe Valladares
            </footer>
        </div>
    );
}
export default Homepage;

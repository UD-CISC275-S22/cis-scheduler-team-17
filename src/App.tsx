import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Schedule Planner</header>
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
                            <Button>Make Scheduler</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <p>Rosemarie Filano, Zoe Valladares, Sydney Hester</p>
                <p>Team 17 Final Project</p>
            </div>
        </div>
    );
}

export default App;

import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
//import { UnderConstruction } from "./components/Underconstruction";

function App(): JSX.Element {
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
                            <Button>Make Scheduler</Button>
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

export default App;

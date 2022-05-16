import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../App.css";
import { DropdownDegrees } from "./DropdownDegrees";
import { SelectCoursesTaken } from "./SelectCoursesTaken";
import { Degree } from "../interfaces/Course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

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
                        <Col className="center">
                            <DropdownDegrees
                                degrees={degrees}
                                degree={degree}
                                updateDegree={updateDegree}
                            ></DropdownDegrees>
                        </Col>
                        <Col className="center">
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
                Team 17:
                <Button
                    className="team"
                    onClick={() =>
                        window.open("https://github.com/rfilano", "_blank")
                    }
                >
                    <img
                        className="teamImg"
                        src="https://avatars.githubusercontent.com/u/90461398?v=4"
                    ></img>{" "}
                    Rosemarie Filano
                </Button>
                <Button
                    className="team"
                    onClick={() =>
                        window.open("https://github.com/sydneyph", "_blank")
                    }
                >
                    <img
                        className="teamImg"
                        src="https://avatars.githubusercontent.com/u/93601194?v=4"
                    ></img>{" "}
                    Sydney Hester
                </Button>
                <Button
                    className="team"
                    onClick={() =>
                        window.open(
                            "https://github.com/Pink-Hat-Hacker",
                            "_blank"
                        )
                    }
                >
                    <img
                        className="teamImg"
                        src="https://avatars.githubusercontent.com/u/21318992?v=4"
                    ></img>{" "}
                    Zoe Valladares
                </Button>
            </footer>
        </div>
    );
}

export default Homepage;

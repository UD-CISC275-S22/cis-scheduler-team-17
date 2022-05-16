import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { Degree } from "../interfaces/Course-Degree-Semester";
import { PrintDegreesLists } from "./PrintDegreesList";
import { FindCourse } from "./FindCourse";

export function CoursesLists({ degree }: { degree: Degree }): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <FindCourse degree={degree} />
                    </Col>
                    <Col>
                        <label>
                            <b>Courses Taken or Planned</b>
                        </label>
                        <PrintDegreesLists
                            taken={true}
                            degree={degree}
                        ></PrintDegreesLists>
                    </Col>
                    <Col>
                        <label>
                            <b>Courses Not Taken or Planned</b>
                        </label>
                        <PrintDegreesLists
                            taken={false}
                            degree={degree}
                        ></PrintDegreesLists>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

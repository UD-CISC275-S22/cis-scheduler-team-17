import React from "react";
import "../App.css";
import { Col, Container, Row } from "react-bootstrap";
import { Degree } from "../interfaces/Course-Degree-Semester";
import { PrintDegreesLists } from "./PrintDegreesList";
import { FindCourse } from "./FindCourse";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CoursesLists({
    degree,
    updateDegree
}: {
    degree: Degree;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <FindCourse />
                    </Col>
                    <Col>
                        <label>Courses Taken or Planned</label>
                        <PrintDegreesLists
                            taken={true}
                            degree={degree}
                            updateDegree={updateDegree}
                        ></PrintDegreesLists>
                    </Col>
                    <Col>
                        <label>Courses Not Taken or Planned </label>
                        <PrintDegreesLists
                            taken={false}
                            degree={degree}
                            updateDegree={updateDegree}
                        ></PrintDegreesLists>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SemesterPlanner } from "../interfaces/course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MoveOption({
    semesterList
}: {
    semesterList: SemesterPlanner[];
}): JSX.Element {
    return (
        <>
            <Form.Label>Move Course</Form.Label>
            <Form.Select value={semesterList[0].SemesterSeason}>
                {semesterList.map((semester: SemesterPlanner) => (
                    <option key={semester.SemesterSeason} value={semester.year}>
                        {semester.SemesterSeason + " " + semester.year}
                    </option>
                ))}
            </Form.Select>
            <Button>Move</Button>
        </>
    );
}

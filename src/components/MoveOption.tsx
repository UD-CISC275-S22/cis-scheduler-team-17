import React from "react";
import { Button } from "react-bootstrap";
import { SemesterPlanner } from "../interfaces/course-Degree-Semester";

export function MoveOption({
    semesterList
}: {
    semesterList: SemesterPlanner[];
}): JSX.Element {
    return <Button>Move Course + {semesterList.length}</Button>;
}

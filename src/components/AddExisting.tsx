import React from "react";
import { SemesterPlanner } from "../interfaces/course-Degree-Semester";

export function AddExisting({
    semesterList
}: {
    semesterList: SemesterPlanner[];
}): JSX.Element {
    return <div>{semesterList[0].year} Under Construction</div>;
}

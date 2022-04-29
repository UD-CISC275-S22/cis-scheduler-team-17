import React from "react";
import { SemesterPlanner } from "../interfaces/course-Degree-Semester";
import { FindCourse } from "./FindCourse";

export function AddExisting({
    semesterList
}: {
    semesterList: SemesterPlanner[];
}): JSX.Element {
    return (
        <div>
            <FindCourse></FindCourse>
        </div>
    );
}

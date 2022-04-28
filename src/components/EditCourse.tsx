import React from "react";
import "../App.css";
import { Degree } from "../interfaces/course-Degree-Semester";
import { FindCourse } from "./FindCourse";

export function EditCourse({ degree }: { degree: Degree }): JSX.Element {
    return (
        <div>
            <FindCourse degree={degree}></FindCourse>
        </div>
    );
}

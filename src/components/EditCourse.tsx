import React from "react";
import "../App.css";
import { FindCourse } from "./FindCourse";

export function EditCourse(): JSX.Element {
    return (
        <div>
            <div>Please Input the Course ID you want to find</div>
            <FindCourse></FindCourse>
        </div>
    );
}

import React from "react";
import "../App.css";
import { FindCourse } from "./FindCourse";

export function EditCourse(): JSX.Element {
    return (
        <div>
            <label>
                <strong>Search by Course ID</strong>
            </label>
            <FindCourse></FindCourse>
        </div>
    );
}

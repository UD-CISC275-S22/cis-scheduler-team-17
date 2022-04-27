import React from "react";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { SemesterPlanner } from "../interfaces/course-Degree-Semester";

export function ExportCSV({
    semesterList
}: {
    semesterList: SemesterPlanner[];
}): JSX.Element {
    const csvData = semesterList;
    const csvHeaders = [
        { label: "Season", key: "SemesterSeason" },
        { label: "Year", key: "year" },
        { label: "Courses", key: "ClassesTaking" },
        { label: "Number of Credits", key: "TotalCredits" }
    ];

    return (
        <div>
            <CSVLink data={csvData} headers={csvHeaders} filename="DegreePlan">
                <Button> Export to CSV</Button>
            </CSVLink>
        </div>
    );
}

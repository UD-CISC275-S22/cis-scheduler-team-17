import React from "react";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { Degree } from "../interfaces/course-Degree-Semester";
import "../App.css";

export function ExportCSV({ degree }: { degree: Degree }): JSX.Element {
    const csvData = degree.SemesterList;
    const csvHeaders = [
        { label: "Season", key: "SemesterSeason" },
        { label: "Year", key: "year" },
        { label: "Courses", key: "ClassesTaking" },
        { label: "Number of Credits", key: "TotalCredits" }
    ];

    return (
        <div>
            <CSVLink data={csvData} headers={csvHeaders} filename="DegreePlan">
                <Button className={"makeInformationButton"}>
                    Export to CSV
                </Button>
            </CSVLink>
        </div>
    );
}

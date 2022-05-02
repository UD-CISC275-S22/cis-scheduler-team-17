import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import { Course, SemesterPlanner } from "../interfaces/course-Degree-Semester";
import "../App.css";

export function ExportCSV({
    semesters
}: {
    semesters: SemesterPlanner[];
}): JSX.Element {
    const [csvData] = useState<SemesterPlanner[]>(semesters);
    const [data] = useState(
        csvData.map((semester) => ({
            SemesterSeason: semester.SemesterSeason,
            year: semester.year,
            ClassesTaking: semester.ClassesTaking.map(
                (course: Course): string => course.courseID
            ),
            TotalCredits: semester.TotalCredits
        }))
    );
    const csvHeaders = [
        { label: "Season", key: "SemesterSeason" },
        { label: "Year", key: "year" },
        { label: "Courses", key: "ClassesTaking" },
        { label: "Number of Credits", key: "TotalCredits" }
    ];

    return (
        <div>
            <CSVLink headers={csvHeaders} filename="DegreePlan" data={data}>
                <Button className={"makeInformationButton"}>
                    Export to CSV
                </Button>
            </CSVLink>
        </div>
    );
}

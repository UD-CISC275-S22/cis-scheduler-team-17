import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import {
    Course,
    Degree,
    SemesterPlanner
} from "../interfaces/course-Degree-Semester";
import "../App.css";

export function ExportCSV({ degree }: { degree: Degree }): JSX.Element {
    const [csvData, updateDegree] = useState<Degree>(degree);
    const [data, updateData] = useState(
        csvData.SemesterList.map((semester: SemesterPlanner) => ({
            SemesterSeason: semester.SemesterSeason,
            year: semester.year,
            ClassesTaking: semester.ClassesTaking.map(
                (course: Course): string => course.courseID
            ),
            TotalCredits: semester.TotalCredits
        }))
    );
    function getData() {
        updateDegree(degree);
        updateData(
            csvData.SemesterList.map((semester: SemesterPlanner) => ({
                SemesterSeason: semester.SemesterSeason,
                year: semester.year,
                ClassesTaking: semester.ClassesTaking.map(
                    (course: Course): string => course.courseID
                ),
                TotalCredits: semester.TotalCredits
            }))
        );
    }
    const csvHeaders = [
        { label: "Season", key: "SemesterSeason" },
        { label: "Year", key: "year" },
        { label: "Courses", key: "ClassesTaking" },
        { label: "Number of Credits", key: "TotalCredits" }
    ];

    return (
        <div>
            <CSVLink headers={csvHeaders} filename="DegreePlan" data={data}>
                <Button className={"makeInformationButton"} onClick={getData}>
                    Export to CSV
                </Button>
            </CSVLink>
        </div>
    );
}

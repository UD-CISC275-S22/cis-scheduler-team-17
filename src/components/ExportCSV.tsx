import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import {
    Course,
    Degree,
    SemesterPlanner
} from "../interfaces/Course-Degree-Semester";
import "../App.css";

export function ExportCSV({ degree }: { degree: Degree }): JSX.Element {
    const [csvData, updateDegree] = useState<Degree>(degree);
    const [data, updateData] = useState(
        csvData.semester_list.map((semester: SemesterPlanner) => ({
            SemesterSeason: semester.semester_season,
            year: semester.year,
            ClassesTaking: semester.classes_taking.map(
                (course: Course): string => course.course_id
            ),
            TotalCredits: semester.total_credits
        }))
    );
    function getData() {
        updateDegree(degree);
        updateData(
            csvData.semester_list.map((semester: SemesterPlanner) => ({
                SemesterSeason: semester.semester_season,
                year: semester.year,
                ClassesTaking: semester.classes_taking.map(
                    (course: Course): string => course.course_id
                ),
                TotalCredits: semester.total_credits
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

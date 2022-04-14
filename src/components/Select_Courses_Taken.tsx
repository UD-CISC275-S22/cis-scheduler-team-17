import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { AllCourses, AllDegrees } from "../interfaces/AllCourses-AllDegrees";
import { Course, Season, Degree } from "../interfaces/course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function SelectCoursesTaken(): JSX.Element {
    // this is going to be where the courses are printed
    const [currentDegree, setDegree] = useState<Degree>(AllDegrees[0]);
    const [currentCourseName, setCurrentCourseName] = useState<string>(
        AllCourses[0].name
    );

    function updateCourseTaken(event: ChangeEvent) {
        // this will update the currently selected course and will update my stuff
        setCurrentCourseName(event.target.value);
        const selectedCourse = currentDegree.CoursesRequired.filter(
            (courses: Course): boolean => courses.name === currentCourseName
        );
        const coursetoUpdate = selectedCourse[0];
        coursetoUpdate.taken = !coursetoUpdate.taken;
    }
    return (
        <div>
            <div>Please Select The Courses You Have Already Taken</div>

            {currentDegree.CoursesRequired.map((currentCourse: Course) => (
                <div key={currentCourse.name}>
                    <Form.Check
                        value={"course"}
                        id="CourseTaken"
                        type="checkbox"
                        onChange={updateCourseTaken}
                        checked={currentCourse.taken}
                        style={{ color: "midnightblue" }}
                        key={currentCourse.name}
                        label={
                            "Course Name: " +
                            currentCourse.name +
                            " ..... Course Description: " +
                            currentCourse.description +
                            " ..... Course Credits: " +
                            currentCourse.credits +
                            " ...... Semesters Available" +
                            currentCourse.SemesterAvailable.map(
                                (currentSeason: Season) => (
                                    <span key={currentSeason}>
                                        {currentSeason},{" "}
                                    </span>
                                )
                            ) +
                            currentCourse.prerecs.map(
                                (currentPreRec: Course) => (
                                    <div key={currentPreRec.name}>
                                        {currentPreRec.name} Taken:{" "}
                                        {currentPreRec.taken ? "✔️" : "❌"}
                                    </div>
                                )
                            ) +
                            " ...... " +
                            <div>{currentCourse.taken ? "✔️" : "❌"}</div>
                        }
                    />
                </div>
            ))}
        </div>
    );
}

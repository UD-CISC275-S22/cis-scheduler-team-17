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
    const [currentTaken, setCurrentTaken] = useState<boolean>();

    function updateCourseTaken(event: React.ChangeEvent<HTMLInputElement>) {
        // this will update the currently selected course and will update my stuff
        setCurrentCourseName(event.target.value);
        const currentCourse = currentDegree.CoursesRequired.filter(
            (currentCourse: Course): boolean =>
                event.target.value === currentCourse.name
        );
        const ourCourse = currentCourse[0];
        ourCourse.taken = !ourCourse.taken;
        setCurrentTaken(ourCourse.taken);
        ourCourse.taken_String = ourCourse.taken ? "✔️" : "❌";
    }
    return (
        <div>
            <div>Please Select The Courses You Have Already Taken</div>

            {currentDegree.CoursesRequired.map((currentCourse: Course) => (
                <div key={currentCourse.name}>
                    <Form.Check
                        type="checkbox"
                        id={currentCourse.name}
                        onChange={updateCourseTaken}
                        name="courses"
                        checked={currentCourse.taken === true}
                        value={currentCourse.name}
                        key={currentCourse.name}
                        label={
                            "Course Name: " +
                            currentCourse.name +
                            " \n Course Description: " +
                            currentCourse.description +
                            " \n Course Credits: " +
                            currentCourse.credits +
                            " ...... Semesters Available: " +
                            currentCourse.SemestersAvailableString +
                            currentCourse.prerecs.map(
                                (currentPreRec: Course) => (
                                    <div key={currentPreRec.name}>
                                        {currentPreRec.name} Taken:{" "}
                                        {currentPreRec.taken ? "✔️" : "❌"}
                                    </div>
                                )
                            ) +
                            " ...... Taken: " +
                            currentCourse.taken_String
                        }
                    />
                </div>
            ))}
        </div>
    );
}

import React, { useState } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import { Course, Degree } from "../interfaces/Course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function PrintDegreesLists({
    taken,
    degree,
    updateDegree
}: {
    taken: boolean;
    degree: Degree;
    updateDegree: (event: ChangeEvent) => void;
}): JSX.Element {
    // this is going to be where the courses are printed
    const [currentDegree, setDegree] = useState<Degree>(degree);
    const [printCourses, setPrintTakenOrNot] = useState<Course[]>(
        currentDegree.CoursesRequired.filter(
            (course: Course): boolean => course.taken === taken
        )
    );
    const [progress, setProgress] = useState(0);
    function updateList() {
        updateDegree;
        setDegree(degree);
        // updating our list
        setPrintTakenOrNot(
            currentDegree.CoursesRequired.filter(
                (course: Course): boolean => course.taken === taken
            )
        );
    }

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        // this handles the scrolling of the box
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;
        setProgress(
            progress + ((scrollTop + containerHeight) / scrollHeight) * 100
        );
        setDegree(degree);
        // updating our list
        setPrintTakenOrNot(
            currentDegree.CoursesRequired.filter(
                (course: Course): boolean => course.taken === taken
            )
        );
    };

    return (
        <div>
            <Button onClick={updateList}>Refresh {taken ? "✔️" : "❌"}</Button>
            <div style={styles.container} onScroll={scrollHandler}>
                {printCourses.map((currentCourse: Course) => (
                    <div key={currentCourse.name}>
                        Course ID: {currentCourse.courseID}
                        {currentCourse.taken_String}
                        <br></br>
                        Pre Requisite:
                        {currentCourse.prerecs.map(
                            (currentPreRec: Course) =>
                                currentPreRec.courseID +
                                " " +
                                currentPreRec.taken_String +
                                "\n"
                        )}
                        <br></br>
                        ____________
                    </div>
                ))}
            </div>
        </div>
    );
}
// Styling
const styles = {
    container: {
        width: 275,
        height: 300,
        margin: "30px auto",
        overflowY: "auto",
        overflowX: "hidden",
        background: "mintcream"
    },
    list: {
        width: "100%"
    },
    progressBar: {
        width: 600,
        height: 20,
        margin: "auto",
        backgroundColor: "#bbb"
    },
    progressValue: {
        height: "100%",
        backgroundColor: "steelblue"
    },
    text: {
        textAlign: "center"
    }
} as const;

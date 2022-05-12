import React, { useState } from "react";
import "../App.css";
import { Course, Degree } from "../interfaces/Course-Degree-Semester";

export function PrintDegreesLists({
    taken,
    degree
}: {
    taken: boolean;
    degree: Degree;
}): JSX.Element {
    // this is going to be where the courses are printed
    const [, setDegree] = useState<Degree>(degree);
    const [progress, setProgress] = useState(0);

    const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
        // this handles the scrolling of the box
        const containerHeight = event.currentTarget.clientHeight;
        const scrollHeight = event.currentTarget.scrollHeight;

        const scrollTop = event.currentTarget.scrollTop;
        setProgress(
            progress + ((scrollTop + containerHeight) / scrollHeight) * 100
        );
        setDegree(degree);
    };

    return (
        <div>
            <div style={styles.container} onScroll={scrollHandler}>
                {degree.courses_required.map((currentCourse: Course) => (
                    <div key={currentCourse.name}>
                        {currentCourse.taken === taken ? (
                            <div>
                                Course ID: {currentCourse.course_id}
                                {currentCourse.taken_string}
                                <br></br>
                                Pre Requisite:
                                {currentCourse.prerecs.map(
                                    (currentPreRec: Course) =>
                                        currentPreRec.course_id +
                                        " " +
                                        currentPreRec.taken_string +
                                        "\n"
                                )}
                                <br></br>
                                ____________{" "}
                            </div>
                        ) : (
                            <div></div>
                        )}
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

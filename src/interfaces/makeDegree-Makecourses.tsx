import {
    Season,
    Course,
    Degree,
    SemesterPlanner
} from "./course-Degree-Semester";

export function makeCourse(
    courseID: string,
    name: string,
    description: string,
    SemesterAvailable: Season[],
    prerecs: Course[],
    credits: number
): Course {
    return {
        ogID: courseID,
        courseID: courseID,
        name: name,
        description: description,
        SemesterAvailable: SemesterAvailable,
        SemestersAvailableString: SemesterAvailable.join(", "),
        prerecs: prerecs,
        credits: credits,
        taken: false,
        taken_String: "❌"
    };
}

export function makeDegree(
    name: string,
    description: string,
    CoursesRequired: Course[],
    CreditsRequired: number,
    SemesterList: SemesterPlanner[]
): Degree {
    return {
        name: name,
        description: description,
        CoursesRequired: CoursesRequired,
        CreditsRequired: CreditsRequired,
        SemesterList: SemesterList
    };
}

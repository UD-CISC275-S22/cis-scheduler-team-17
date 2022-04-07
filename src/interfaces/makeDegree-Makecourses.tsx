import { Season, Course, Degree } from "./course-Degree-Semester";

export function makeCourse(
    name: string,
    description: string,
    SemesterAvailable: Season[],
    prerecs: Course[],
    credits: number
): Course {
    return {
        name: name,
        description: description,
        SemesterAvailable: SemesterAvailable,
        prerecs: prerecs,
        credits: credits,
        taken: false
    };
}

export function makeDegree(
    name: string,
    description: string,
    CoursesRequired: Course[],
    CreditsRequired: number
): Degree {
    return {
        name: name,
        description: description,
        CoursesRequired: CoursesRequired,
        CreditsRequired: CreditsRequired
    };
}

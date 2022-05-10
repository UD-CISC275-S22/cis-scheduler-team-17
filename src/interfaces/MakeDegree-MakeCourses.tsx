import {
    Season,
    Course,
    Degree,
    SemesterPlanner
} from "./Course-Degree-Semester";

export function makeCourse(
    course_id: string,
    name: string,
    description: string,
    semester_available: Season[],
    prerecs: Course[],
    credits: number
): Course {
    return {
        og_id: course_id,
        course_id: course_id,
        name: name,
        og_name: name,
        description: description,
        og_description: description,
        semester_available: semester_available,
        semester_available_string: semester_available.join(", "),
        prerecs: prerecs,
        credits: credits,
        og_credits: credits,
        taken: false,
        taken_string: "❌"
    };
}
export function makeCourseTaken(
    course_id: string,
    name: string,
    description: string,
    semester_available: Season[],
    prerecs: Course[],
    credits: number,
    taken: boolean
): Course {
    return {
        og_id: course_id,
        course_id: course_id,
        name: name,
        og_name: name,
        description: description,
        og_description: description,
        semester_available: semester_available,
        semester_available_string: semester_available.join(", "),
        prerecs: prerecs,
        credits: credits,
        og_credits: credits,
        taken: taken,
        taken_string: taken ? "❌" : "✔️"
    };
}
export function makeDegree(
    name: string,
    description: string,
    courses_required: Course[],
    credits_required: number,
    semester_list: SemesterPlanner[]
): Degree {
    return {
        name: name,
        description: description,
        courses_required: courses_required,
        credits_required: credits_required,
        semester_list: semester_list
    };
}

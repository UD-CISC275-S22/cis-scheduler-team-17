//Zoe addition for season
export const SeasonsList = [
    "Spring",
    "Summer",
    "Fall",
    "Winter",
    "Varies By Department"
];
export type Season =
    | typeof SeasonsList[0]
    | typeof SeasonsList[1]
    | typeof SeasonsList[2]
    | typeof SeasonsList[3]
    | typeof SeasonsList[4];

/** A representation of a Question in a quizzing application */
export interface Course {
    /** The name of the course */
    og_id: string;
    /**This course name can be edited, the OG will always remain the same */
    course_id: string;
    /** The name that can be edited and the original name when reverting is needed*/
    name: string;
    og_name: string;
    /** The instructions and content of the Question and the og description for reverting */
    description: string;
    og_description: string;
    /** The semesters when the class is offered */
    semester_available: Season[];
    // the string that prints the seeasons available
    semester_available_string: string;
    /** The courses that need to be taken before you can take this course */
    prerecs: Course[];
    /** The number of credits the course is worth, and the og for reverting */
    credits: number;
    og_credits: number;
    /** Whether or not the user has taken the course */
    taken: boolean;
    /**taken String */
    taken_string: string;
}

export interface Degree {
    /** The name of the degree */
    name: string;
    /** the description of the degree */
    description: string;
    /** Courses needed to complete the degree */
    courses_required: Course[];
    /** Credits Needed */
    credits_required: number;
    /**Semesters */
    semester_list: SemesterPlanner[];
}

export interface SemesterPlanner {
    /** Classes the user is taking this semester */
    classes_taking: Course[];
    /** the year the semester occurs*/
    year: number;
    /** season the class is taking place during */
    semester_season: Season;
    /** Credits the user is taking */
    total_credits: number;
}

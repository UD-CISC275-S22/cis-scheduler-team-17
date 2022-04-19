/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type Season =
    | "Spring"
    | "Summer"
    | "Fall"
    | "Winter"
    | "Varies By Department";

/** A representation of a Question in a quizzing application */
export interface Course {
    /** The name of the course */
    courseID: string;
    name: string;
    /** The instructions and content of the Question */
    description: string;
    /** The semesters when the class is offered */
    SemesterAvailable: Season[];
    // the string that prints the seeasons available
    SemestersAvailableString: string;
    /** The courses that need to be taken before you can take this course */
    prerecs: Course[];
    /** The number of credits the course is worth */
    credits: number;
    /** Whether or not the user has taken the course */
    taken: boolean;
    /**taken String */
    taken_String: string;
}

export interface Degree {
    /** The name of the degree */
    name: string;
    /** the description of the degree */
    description: string;
    /** Courses needed to complete the degree */
    CoursesRequired: Course[];
    /** Credits Needed */
    CreditsRequired: number;
}

export interface SemesterPlanner {
    /** Classes the user is taking this semester */
    ClassesTaking: Course[];
    /** the year the semester occurs*/
    year: number;
    /** season the class is taking place during */
    SemesterSeason: Season;
    /** Credits the user is taking */
    TotalCredits: number;
}

/** QuestionType influences how a question is asked and what kinds of answers are possible */

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
    ogID: string;
    /**This course name can be edited, the OG will always remain the same */
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
    /**Semesters */
    SemesterList: SemesterPlanner[];
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

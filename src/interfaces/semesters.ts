/**
 * Semesters
 * - classesTaken, course list
 * - year, number
 * - season, string
 * - totalCredits, number
 */

export interface Semesters {
    semesters_classesTake: string[]; //will be a course object list rather
    semester_year: number;
    semester_season: string;
    semester_totalCredits: number;
}

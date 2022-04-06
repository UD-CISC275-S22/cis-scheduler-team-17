/**
 * Degree
 * - Name, string
 * - Description, string
 * - CoursesNeeded, list
 * - CreditsNeeded, number
 * - DegreeID, type of degree(BS,BA,IFSYS)?
 */

export interface Degree {
    degree_name: string;
    degree_description: string;
    degree_coursesNeeded: string[]; //possibly course interface list
    degree_creditsNeeded: number;
}

/**
 * Courses
 * - name, string
 * - credits, number
 * - taken, boolean
 * - description, string
 * - preReqs, list of strings
 */

export interface Courses {
    course_name: string;
    course_credits: number;
    course_taken: boolean;
    course_description: string;
    course_prereqs: string[];
}

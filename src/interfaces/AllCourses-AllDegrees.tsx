import { makeCourse, makeDegree } from "./makeDegree-Makecourses";

const allCourses = [
    makeCourse("name", "description", ["Spring", "Fall"], [], 0)
];
console.log(allCourses);

const AllDegrees = [makeDegree("null", "null", [], 0)];
console.log(AllDegrees);

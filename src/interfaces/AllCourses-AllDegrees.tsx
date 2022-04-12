import { makeCourse, makeDegree } from "./makeDegree-Makecourses";
//import { Season } from "./course-Degree-Semester";

//These are all of the hard coded courses
// Year 1 BS plan
const EGGG101 = makeCourse(
    "EGGG101: Introduction to Engineering",
    "Introduction to profession, including disciplines of chemical, civil, computer, electrical, environmental, and mechanical engineering. Prepares students for success through integration of: technical problem solving and engineering design, ethical decision-making, teamwork, and communicating to diverse audiences.",
    ["Fall"],
    [],
    2
);
const CISC108 = makeCourse(
    "CISC108: Introduction To Computer Science 1",
    "Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, but intended primarily for majors and minors in computer science or mathematics. COREQ: MATH115, MATH117, or higher math course or math placement. RESTRICTIONS: Students who received credit in CISC106 are not eligible to take this course without permission.",
    ["Fall", "Spring", "Summer"],
    [],
    3
);
const MATH241 = makeCourse(
    "MATH241: Analytic Geometry and Calculus A",
    "Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    4
);
const ENGL110 = makeCourse(
    "ENGL110: Seminar in Composition",
    "Introduction to the process of academic writing that centers on the composition of analytical, research-based essays.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const BreadthRequirementCAAH = makeCourse(
    "Breadth Requirement Creative Arts and Humanities",
    "These courses provide students with an understanding and appreciation of the visual and performing arts, of aesthetic forms, designs, or craftsmanship, or of literary, philosophical, and intellectual traditions. Courses may focus on a single aesthetic form or intellectual tradition, or cross-cultural comparisons.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const BreadthRequirementHACC = makeCourse(
    "Breadth Requirement History and Cultural Change",
    "These courses provide students with an understanding of the sources and forces of historical changes in ideas, beliefs, institutions, and cultures. Courses may address social, cultural, intellectual, economic, technological, artistic, scientific, and political development, changes in a discipline, or globalization and its effects.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const BreadthRequirementSABS = makeCourse(
    "Breadth Requirement Social and Behavioral Sciences",
    "These courses provide students with an understanding of the behavior of individuals and social groups in the context of their human and natural environments. Courses emphasize the empirical findings, applications, and methods of the social and behavioral sciences.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const BreadthRequirementGen = makeCourse(
    "Breadth Requirement General",
    "A college education requires some breadth of knowledge across diverse fields and perspectives. With this in mind, all students are required to complete a minimum of 12 credits from the list of University breadth courses. This includes 3 credits from each of the following categories. Students must earn a minimum grade of C- in each course to meet this requirement",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const CISC181 = makeCourse(
    "CISC181: Introduction to Computer Science II",
    "Principles of computer science illustrated and applied through programming in an object oriented language. Programming projects illustrate computational problems, styles and issues that arise in computer systems development and in all application areas of computation.",
    ["Fall", "Spring"],
    [CISC108, MATH241],
    3
);
const CISC210 = makeCourse(
    "CISC210: Introduction to Systems Programming",
    "Principles of computer systems programming for software and hardware platforms to achieve efficient resource usage. Topics include the C programming language, memory management, and awareness of system constraints and interfacing. Projects include programming embedded systems and interactive objects.",
    ["Fall", "Spring"],
    [CISC108, MATH241],
    3
);
const MATH242 = makeCourse(
    "MATH242: Analytic Geometry and Calculus B",
    "Brief review of MATH 241; evaluation of limits by L’Hospital’s rule; applications of integration; integration techniques; parametric curves; polar coordinates; infinite sequences and series. Includes use of computers to perform symbolic, numerical and graphical analysis.",
    ["Fall", "Winter", "Spring", "Summer"],
    [MATH241],
    4
);
// year 2 BS plan
const CISC220 = makeCourse(
    "CISC220: Data Structures",
    "Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching.",
    ["Fall", "Spring"],
    [CISC210, MATH241],
    3
);
const CISC260 = makeCourse(
    "CISC260: Machine Organization and Assembly Language",
    "ntroduction to the basics of machine organization. Programming tools and techniques at the machine and assembly levels. Assembly language programming and computer arithmetic techniques.",
    ["Fall", "Spring"],
    [CISC210],
    3
);
const MATH210 = makeCourse(
    "MATH210: Discrete Mathematics I",
    "Elements of sets and logic. Relations, functions. Integers. Induction and recursion. Principles and techniques of counting. Graphs. Paths and circuits",
    ["Fall", "Winter", "Spring"],
    [MATH241, MATH242],
    3
);
const ScienceRequirement1 = makeCourse(
    "1/2 Lab Science",
    "The first lab science you need to take",
    ["Fall"],
    [],
    4
);
const ScienceRequirement2 = makeCourse(
    "2/2 Lab Science",
    "The first lab science you need to take",
    ["Fall"],
    [],
    4
);
const CISC355 = makeCourse(
    "CISC355: Computers, Ethics and Society",
    "Explains relationships among information technology, society and ethics by examining issues raised by increasingly widespread use of computers. Topics include ethics for computer professionals, computer impact on factory work, office work, personal privacy and social power distribution.",
    ["Spring"],
    [],
    3
);
const CISC275 = makeCourse(
    "CISC275: Introduction to Software Engineering",
    "Object oriented software design and development through use of an object oriented programming language. Topics include team programming, design patterns, graphical user interfaces, software engineering tools (e.g., integrated development environments, version control, build management, bug tracking, automated testing).",
    ["Fall", "Spring"],
    [CISC181, CISC220],
    3
);
const MATH205_MATH350 = makeCourse(
    "MATH205: Statistical Methods/MATH350: Probability Theory and Simulation Methods",
    "205 Descriptive statistics (3 credits), graphical displays, sampling, variation, normal distribution, estimation, hypothesis testing, one-way analysis of variance, simple linear regression and goodness of fit. Laboratory covers use of statistical packages on mainframe and microcomputers : 350 (4 credits) Introduces the basic theory of discrete and continuous aspects of probability theory. Topics include bivariate distributions, sums of independent random variables, moment generating functions, laws of large numbers and central limit theorem.",
    ["Fall", "Spring"],
    [MATH210],
    3
);
// Specialized CISC
const CISC481 = makeCourse(
    "CISC481: Artificial Intelligence",
    "Programming techniques for problems not amenable to algorithmic solutions. Problem formulation, search strategies, state spaces, applications of logic, knowledge representation, planning and application areas.",
    ["Fall", "Spring"],
    [CISC220 /**ADD CISC304*/],
    3
);

// Hard coded versions of the Degrees
// BS Concentrations
const two_year_plan_BS = [
    EGGG101,
    CISC108,
    MATH241,
    ENGL110,
    BreadthRequirementCAAH,
    BreadthRequirementGen,
    BreadthRequirementHACC,
    BreadthRequirementSABS,
    CISC181,
    CISC210,
    MATH242,
    CISC220,
    CISC260,
    MATH210,
    ScienceRequirement1,
    ScienceRequirement2,
    CISC275,
    CISC355,
    MATH205_MATH350
];
const Artificial_Intelligence_and_Robotics_Concentration = makeDegree(
    "Artificial Intelligence and Robotics Concentration",
    "How do automatic translation apps work? How do driverless cars “see” the road? What has been behind the recent streak of computer programs beating human world champions at all kinds of games? The AI and Robotics concentration is concerned with understanding the building blocks of cognition, as well as applying them to the development of systems that are able to perform tasks traditionally associated with human brainpower, dexterity, and/or mobility. Courses in this concentration will cover abstract notions of intelligence, including logical reasoning, knowledge representation, language, and planning; a spectrum of methods for pattern analysis and learning-by-example, including deep learning and neural networks; and skills for embodied agents, such as perception (via visual and other sensors), navigation, and interaction.",
    two_year_plan_BS.concat([CISC481]),
    124
);
const Bioinformatics_Concentration = makeDegree(
    "Bioinformatics Concentration",
    "Bioinformatics lies at the intersection of computational science and biology. The field is gaining impact in recent years as biology becomes increasingly data-centric and quantitative. There is a growing need for individuals with training in biology, chemistry, and computer science. This concentration combines background in life sciences with expertise in computational methods to fill this need. Students successfully completing this concentration will be well-prepared for graduate studies in computer science or bioinformatics and for a variety of interdisciplinary careers in industry and in health and research institutes.",
    two_year_plan_BS.concat([CISC481]),
    124
);

// lists of all courses and degrees
const AllDegrees = [
    Artificial_Intelligence_and_Robotics_Concentration,
    Bioinformatics_Concentration
];
console.log(AllDegrees);
// the hard coded degrees will go here
const allCourses = [
    EGGG101,
    CISC108,
    MATH241,
    ENGL110,
    BreadthRequirementCAAH,
    BreadthRequirementGen,
    BreadthRequirementHACC,
    BreadthRequirementSABS,
    CISC181,
    CISC210,
    MATH242,
    CISC220,
    CISC260,
    MATH210,
    ScienceRequirement1,
    ScienceRequirement2,
    CISC275,
    CISC355,
    MATH205_MATH350
];
console.log(allCourses);

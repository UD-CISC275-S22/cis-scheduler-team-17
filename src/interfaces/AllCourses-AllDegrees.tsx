import { makeCourse, makeDegree } from "./makeDegree-Makecourses";

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
const BreadthRequirementForeignLanguage = makeCourse(
    "Breadth Requirement History and Cultural Change",
    "These courses provide students with an understanding of the sources and forces of historical changes in ideas, beliefs, institutions, and cultures. Courses may address social, cultural, intellectual, economic, technological, artistic, scientific, and political development, changes in a discipline, or globalization and its effects.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const BreadthRequirementMulticultural = makeCourse(
    "Breadth Requirement Social and Behavioral Sciences",
    "These courses provide students with an understanding of the behavior of individuals and social groups in the context of their human and natural environments. Courses emphasize the empirical findings, applications, and methods of the social and behavioral sciences.",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const BreadthRequirement = makeCourse(
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
const Free_Elective = makeCourse(
    "Free Elective",
    "Take a Free Elective",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
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
// Specialized CISC Courses for the BS Concentrations
const CISC304 = makeCourse(
    "CISC304: Logic for Programming",
    "Propositional and predicate logic for general reasoning and advanced applications in knowledge representation in artificial intelligence and database, program correctness and programming semantics. Models, resolution, logic programming, and natural deduction.",
    ["Fall", "Spring"],
    [CISC220, MATH210],
    3
);
const CISC320 = makeCourse(
    "CISC320: Introduction to Algorithms",
    "Design and analysis of algorithms: worst/average case analysis, proofs for correctness and performance of algorithms. Algorithmic strategies (divide and conquer, greedy methods, dynamic programming, etc.). Algorithms for searching, forming and traversal of strings, trees and graphs. Categorization of computational problems: classes P and NP. NP completeness.",
    ["Fall", "Spring"],
    [MATH210, CISC220],
    3
);
const CISC361 = makeCourse(
    "CISC361: Operating Systems",
    "Principles and techniques employed in the development of operating systems and their control programs. Includes management of memory, processors, I/O devices.",
    ["Fall", "Spring"],
    [CISC220, CISC260],
    3
);
const CISC_Elective = makeCourse(
    "CISC Elective",
    "Take a Cisc Elective",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const Restricted_CISC_Elective = makeCourse(
    "Restricted CISC Elective",
    "you need to take a Restricted CISC Elective",
    ["Fall", "Winter", "Spring", "Summer"],
    [],
    3
);
const CISC303 = makeCourse(
    "CISC303: Automata Theory",
    "Automata and formal language theory. Background for advanced applications in compilers, computer networks, operating systems, and natural language processing. Finite automata and regular languages. Push down automata and context free grammars. Turing machines.",
    ["Fall", "Spring"],
    [MATH210, CISC220],
    3
);
const CISC442 = makeCourse(
    "CISC442: Introduction to Computer Vision",
    "Analysis of images and video to recognize, reconstruct, model, and otherwise infer static and dynamic properties of objects in the three-dimensional world. Geometry of image formation; image processing such as smoothing, edge and feature detection, color, and texture; segmentation; shape representation including deformable templates; stereo vision; motion estimation and tracking; techniques for 3-D reconstruction; image registration methods.",
    ["Fall", "Spring"],
    [CISC220],
    3
);
const ENGL312_ENGL410 = makeCourse(
    "ENGL312/ENGL410",
    "English COurse",
    [],
    [],
    3
);
const CISC481 = makeCourse(
    "CISC481: Artificial Intelligence",
    "Programming techniques for problems not amenable to algorithmic solutions. Problem formulation, search strategies, state spaces, applications of logic, knowledge representation, planning and application areas.",
    ["Fall", "Spring"],
    [CISC220, CISC304],
    3
);
const CISC483 = makeCourse(
    "CISC483: Introduction to Data Mining",
    "Concepts, techniques, and algorithms for mining large data sets to discover structural patterns that can be used to make subsequent predictions. Emphasis on practical approaches and empirical evaluation. Use of a workbench of data mining tools, such as the Weka toolkit.",
    ["Varies By Department"],
    [CISC220, MATH205_MATH350],
    3
);
const CISC484 = makeCourse(
    "CISC484: Introduction to Machine Learning",
    "Development of methods to learn to solve a task using examples. Explore different machine learning algorithms/techniques and discuss their strengths and weaknesses and situations they are or are not suited for.",
    ["Fall", "Spring"],
    [CISC220, MATH205_MATH350],
    3
);
const CISC498_Or_UNIV401 = makeCourse(
    "CISC498: Computer Science Senior Design Project I",
    "First semester of two-semester senior software design course.  Students work in teams to develop solutions to real-world problems for a client.  Application of a modern software engineering process; requirement solicitation, analysis, and specification; prototyping; design; incremental development; testing and verification; client interaction; and presentation. Offered in Fall only.",
    ["Fall"],
    [CISC275, CISC320],
    3
);
const CISC499_Or_UNIV402 = makeCourse(
    "CISC499: Computer Science Senior Design Project II",
    "COMP SCI SENIOR DESIGN II Continuation of CISC 498.",
    ["Spring"],
    [CISC498_Or_UNIV401],
    3
);
//BIO
const CHEM111 = makeCourse(
    "CHEM111: General Chemistry",
    "Fundamental laws of chemical action with emphasis on atomic structure, chemical bonding, and important classes of substances.",
    ["Fall"],
    [],
    3
);
const BISC207 = makeCourse(
    "BISC207: Introductory Biology I",
    "Molecular basis of life. Structure and function of cells, including signal transduction pathways. Energy transformations. Classical Mendelian genetics and the flow of information from DNA to RNA to proteins. Laboratory focuses on the testing of hypotheses, data analysis and scientific writing.",
    ["Fall", "Winter", "Spring", "Summer"],
    [CHEM111],
    4
);
const MATH349 = makeCourse(
    "MATH349: Elementary Linear Algebra",
    "Systems of linear equations, linear combinations of vectors, and matrix algebra. Determinants, eigenvalues and eigenvectors, similarity and diagonalization of square matrices. Vector spaces, linear dependence and independence, basis and dimension, linear transformations. Inner product spaces, orthogonality, orthogonal projections, fundamental subspaces. A software package may be used for the analysis and solution of linear algebra problems.",
    ["Fall", "Spring"],
    [MATH242],
    3
);
const CHEM213CHEM215_OR_CHEM321CHEM325 = makeCourse(
    "CHEM213+CHEM215 or CHEM321+CHEM325",
    "CHEM213+215: A survey of the fundamentals of organic chemistry. Topics include molecular structure, organic nomenclature, functional groups, isomerism and stereoisomerism, reaction mechanisms, and organic synthesis. Basic principles will be illustrated with examples of biological significance. : A survey of elementary laboratory techniques that are useful to organic chemists. Separation and purification techniques and examples of typical organic reactions will be included. ; CHEM321+215: The practice and application of volumetric and gravimetric analysis, as well as basic chromatographic  and spectrometric measurements. : Laboratory work that introduces the basic laboratory techniques of organic chemistry. ",
    ["Varies By Department"],
    [CHEM111],
    3
);
const BISC208 = makeCourse(
    "BISC208: Introductory Biology II",
    "Mechanisms of evolution. Physiology of multicellular plants and animals. Principles of ecology with emphasis on the biology of populations. Laboratory focuses on testing of hypotheses, data analysis and scientific writing. Animal and plant anatomy also studied.",
    ["Fall", "Winter", "Spring", "Summer"],
    [BISC207],
    4
);
const BISC401 = makeCourse(
    "BISC401: Molecular Biology of the Cell",
    "Introduction to the molecular biology of eucaryotes and procaryotes. Topics include structure and function of proteins and nucleic acids; replication and repair of DNA; biosynthesis of RNA and proteins; membranes, transport, composition and function of the eucaryotic cell, chromosomes, viruses, the immune system and recombinant DNA.",
    ["Fall", "Spring"],
    [BISC207],
    3
);
const CISC436 = makeCourse(
    "CISC436: Computational Biology and Bioinformatics",
    "Concepts, methodologies, and tools in bioinformatics. Abstraction of biological problems for computational solutions. Genome sequencing and assembly, bio-sequence analysis and comparison and database search, dynamics programming, hidden Markov models, and phylogenetic trees.",
    ["Varies By Department"],
    [CISC220],
    3
);
//cybersecurity
const CISC450 = makeCourse(
    "CISC450: Computer Networks I",
    "Foundation principles, architectures and techniques employed in computer and communication networks. Focuses on mechanisms used in TCP/IP protocol suite. Topics include connection management, end-to-end reliable data transfer, sliding window protocols, quality of service, flow control, congestion control, routing, LANs, framing, error control, analog versus digital transmission, packet versus circuit switching, multiplexing.",
    ["Fall", "Spring"],
    [CISC260],
    3
);
const CISC372 = makeCourse(
    "CISC372: Parallel Computing",
    "Introduction to parallel computing concepts, methodologies, and tools. Programming and algorithmic techniques for code that will run simultaneously on parallel computing architectures. Topics include: single and multi-core parallelism, shared and distributed memory architectures, concurrency, program decomposition, data distribution, communication, load balancing, scalability, locality, granularity, debugging, performance evaluation.",
    ["Fall", "Spring"],
    [CISC220, CISC260],
    3
);
const CISC464 = makeCourse(
    "CISC464: Introduction to Network Security",
    "Practical introduction to network security field. Covers material on cryptography, intrusions, denial-of-service attacks, worms, honeynets and other hot topics in network security.",
    ["Varies By Department"],
    [CISC450],
    3
);
const Restricted_Elective = makeCourse(
    "Restricted Elective",
    "This is a restrictive elective",
    ["Varies By Department"],
    [],
    3
);
const Advanced_Cybersecurity_Requirment = makeCourse(
    "Advanced Cybersecurity Requirement",
    "You need to take an advanced cybersecurity requirement",
    ["Varies By Department"],
    [],
    3
);
const CISC465 = makeCourse(
    "CISC465: Introduction to Cybersecurity",
    "This cybersecurity course is an introduction to computer and network security and covers the foundation security policies and methods to provide confidentiality, integrity, and availability, as well as cryptography, auditing, and user security. Topics are reinforced with hands-on exercises run in a virtual machine environment.",
    ["Varies By Department"],
    [],
    3
);
const CPEG494 = makeCourse(
    "CPEG494: System Hardening and Protection",
    "Practical treatment of the defensive techniques used to harden computer systems to make them less vulnerable to cyber-attacks. Defect management, configuration/hardening, account control, logs/auditing, and risk assessment are covered and reinforced with hands-on exercises run in a virtual machine environment.",
    ["Fall"],
    [],
    3
);
// data science
const Advanced_Math_Requirement = makeCourse(
    "Advanced Math Requirement",
    "This is an advanced Math Requirement",
    ["Varies By Department"],
    [],
    3
);
const CISC437 = makeCourse(
    "CISC437: Database Systems",
    "Physical and logical organization of databases. Data retrieval languages, relational database languages, security and integrity, concurrency, distributed databases.",
    ["Fall", "Spring"],
    [CISC220],
    3
);
const Advanced_Data_Science_Requirement = makeCourse(
    "Advanced Data Science Requirement",
    "Advanced Data Science Requirement",
    ["Varies By Department"],
    [],
    3
);
// high performace computing concentration
const CISC360 = makeCourse(
    "CISC360: Computer Architecture",
    "Principles and techniques used in the architecture of digital computers. Machine elements and their interrelation. Instruction sets, risc vs cisc, registers, busses and switches.",
    ["Fall", "Spring"],
    [CISC220, CISC260],
    3
);
const TRACK_Elective = makeCourse(
    "TRACK Elective",
    "Track Elective",
    ["Varies By Department"],
    [],
    3
);
const TRACK_Requirement = makeCourse(
    "TRACK Requirment",
    "TRACK Requirement",
    ["Varies By Department"],
    [],
    3
);
const CISC471 = makeCourse(
    "CISC471: Compiler Design",
    "Introduction to the design and implementation of compilers, with a focus on lexical analysis, parsing and syntax directed translation.",
    ["Varies By Department"],
    [CISC260, CISC303],
    3
);
//Systems and networks concentration
const Advanced_Systems_Requirment = makeCourse(
    "Advanced System Requirement",
    "Advanced System Requirement",
    ["Varies By Department"],
    [],
    3
);
const Security_Elective = makeCourse(
    "Security Elective",
    "Security Elective",
    ["Varies By Department"],
    [],
    3
);
//Theory and Computation Concentration
const CISC401 = makeCourse(
    "CISC401: Elements of the Theory of Computation",
    "General models of computation, formal languages and automata theory and algorithmic unsolvability.",
    ["Varies By Department"],
    [CISC303],
    3
);
// Hard coded versions of the Degrees
// BS Concentrations, I clone the two year plan and concatenate the pther courses
const allCourses = [
    EGGG101,
    CISC108,
    MATH241,
    ENGL110,
    BreadthRequirementForeignLanguage,
    BreadthRequirementMulticultural,
    BreadthRequirement,
    CISC181,
    CISC210,
    MATH242,
    CISC220,
    CISC260,
    MATH210,
    ScienceRequirement1,
    ScienceRequirement2,
    Free_Elective,
    CISC355,
    CISC275,
    MATH205_MATH350,
    CISC304,
    CISC320,
    CISC361,
    CISC_Elective,
    Restricted_CISC_Elective,
    CISC303,
    CISC442,
    ENGL312_ENGL410,
    CISC481,
    CISC483,
    CISC484,
    CISC498_Or_UNIV401,
    CISC499_Or_UNIV402,
    CHEM111,
    BISC207,
    MATH349,
    CHEM213CHEM215_OR_CHEM321CHEM325,
    BISC208,
    BISC401,
    CISC436,
    CISC450,
    CISC372,
    CISC464,
    Restricted_Elective,
    Advanced_Cybersecurity_Requirment,
    CISC465,
    CPEG494,
    Advanced_Math_Requirement,
    CISC437,
    Advanced_Data_Science_Requirement,
    CISC360,
    TRACK_Elective,
    TRACK_Requirement,
    CISC471,
    Advanced_Systems_Requirment,
    Security_Elective,
    CISC401
];
const two_year_plan_BS = [
    EGGG101,
    CISC108,
    MATH241,
    ENGL110,
    BreadthRequirement,
    CISC181,
    CISC210,
    MATH242,
    BreadthRequirement,
    BreadthRequirement,
    CISC220,
    CISC260,
    MATH210,
    ScienceRequirement1,
    Free_Elective,
    CISC275,
    CISC355,
    MATH205_MATH350,
    ScienceRequirement2,
    BreadthRequirementMulticultural
];
const AI_Concentration_Courses = [...two_year_plan_BS].concat([
    CISC304,
    CISC320,
    CISC361,
    CISC_Elective,
    Restricted_CISC_Elective,
    CISC303,
    CISC442,
    CISC481,
    ENGL312_ENGL410,
    Restricted_CISC_Elective,
    CISC483,
    CISC498_Or_UNIV401,
    Restricted_CISC_Elective,
    Free_Elective,
    Free_Elective,
    CISC484,
    CISC499_Or_UNIV402,
    Restricted_CISC_Elective,
    Free_Elective,
    Free_Elective
]);
const Bioinformatics_Concentration_Courses = [...two_year_plan_BS].concat([
    CISC320,
    BISC207,
    MATH349,
    CHEM213CHEM215_OR_CHEM321CHEM325,
    CISC303,
    BISC208,
    ENGL312_ENGL410,
    CISC483,
    Free_Elective,
    CISC498_Or_UNIV401,
    BISC401,
    Restricted_CISC_Elective,
    Free_Elective,
    Free_Elective,
    CISC499_Or_UNIV402,
    CISC436,
    Restricted_CISC_Elective,
    Free_Elective,
    Free_Elective
]);
const Cybersecurity_Concentration_Courses = [...two_year_plan_BS].concat([
    CISC320,
    CISC361,
    CISC450,
    CISC_Elective,
    Free_Elective,
    CISC303,
    CISC372,
    ENGL312_ENGL410,
    Restricted_Elective,
    Free_Elective,
    CISC498_Or_UNIV401,
    CISC464,
    Advanced_Cybersecurity_Requirment,
    Free_Elective,
    Restricted_Elective,
    CISC499_Or_UNIV402,
    CISC465,
    CPEG494,
    Advanced_Cybersecurity_Requirment,
    Free_Elective
]);
const Data_Science_Concentration_Courses = [...two_year_plan_BS].concat([
    CISC304,
    MATH349,
    CISC320,
    Advanced_Math_Requirement,
    Free_Elective,
    CISC303,
    CISC372,
    ENGL312_ENGL410,
    CISC437,
    Free_Elective,
    CISC498_Or_UNIV401,
    CISC481,
    Restricted_Elective,
    Free_Elective,
    Free_Elective,
    CISC499_Or_UNIV402,
    Advanced_Data_Science_Requirement,
    CISC_Elective,
    Free_Elective,
    Free_Elective
]);
const High_Performance_Computing_Concentration_Courses = [
    ...two_year_plan_BS
].concat([
    CISC320,
    CISC360,
    CISC361,
    TRACK_Elective,
    TRACK_Requirement,
    CISC303,
    CISC372,
    ENGL312_ENGL410,
    Free_Elective,
    Free_Elective,
    CISC498_Or_UNIV401,
    TRACK_Elective,
    TRACK_Requirement,
    Free_Elective,
    Free_Elective,
    CISC499_Or_UNIV402,
    CISC450,
    CISC471,
    TRACK_Requirement,
    Free_Elective
]);
const Systems_and_Networks_Concentration_Courses = [...two_year_plan_BS].concat(
    [
    CISC320,
    CISC360,
    CISC361,
    Restricted_Elective,
    CISC_Elective,
    CISC303,
    CISC372,
    ENGL312_ENGL410,
    Restricted_Elective,
    Free_Elective,
    CISC498_Or_UNIV401,
    CISC450,
    Advanced_Systems_Requirment,
    Free_Elective,
    Free_Elective,
    CISC499_Or_UNIV402,
    CISC471,
    Advanced_Systems_Requirment,
    Security_Elective,
    Free_Elective
    ]
);
const Theory_and_Computation_Computation_Courses = [...two_year_plan_BS].concat(
    [
    CISC304,
    MATH349,
    CISC320,
    TRACK_Requirement,
    Free_Elective,
    CISC303,
    ENGL312_ENGL410,
    TRACK_Requirement,
    Free_Elective,
    Free_Elective,
    CISC498_Or_UNIV401,
    CISC401,
    Restricted_Elective,
    TRACK_Requirement,
    Free_Elective,
    CISC499_Or_UNIV402,
    Restricted_Elective,
    TRACK_Requirement,
    CISC_Elective,
    Free_Elective
    ]
);
// degree declarations
const NoDegree = makeDegree(
    "No Degree Has been selected",
    "There has not been a course Selected",
    allCourses,
    0
);
const Artificial_Intelligence_and_Robotics_Concentration = makeDegree(
    "Artificial Intelligence and Robotics Concentration",
    "How do automatic translation apps work? How do driverless cars “see” the road? What has been behind the recent streak of computer programs beating human world champions at all kinds of games? The AI and Robotics concentration is concerned with understanding the building blocks of cognition, as well as applying them to the development of systems that are able to perform tasks traditionally associated with human brainpower, dexterity, and/or mobility. Courses in this concentration will cover abstract notions of intelligence, including logical reasoning, knowledge representation, language, and planning; a spectrum of methods for pattern analysis and learning-by-example, including deep learning and neural networks; and skills for embodied agents, such as perception (via visual and other sensors), navigation, and interaction.",
    AI_Concentration_Courses,
    124
);
const Bioinformatics_Concentration = makeDegree(
    "Bioinformatics Concentration",
    "Bioinformatics lies at the intersection of computational science and biology. The field is gaining impact in recent years as biology becomes increasingly data-centric and quantitative. There is a growing need for individuals with training in biology, chemistry, and computer science. This concentration combines background in life sciences with expertise in computational methods to fill this need. Students successfully completing this concentration will be well-prepared for graduate studies in computer science or bioinformatics and for a variety of interdisciplinary careers in industry and in health and research institutes.",
    Bioinformatics_Concentration_Courses,
    124
);
const Cybersecurity_Concentration = makeDegree(
    "Cybersecurity Concentration",
    "Backdoor vulnerabilities. Denial of service attacks. Viruses, worms, and cyberintrusions. Massive security breaches at major corporations, government facilities, and other institutions are announced on a regular basis. Is it any surprise that cybersecurity experts are among the most in-demand computer science professionals? Students in this concentration study the whole spectrum of vulnerabilities as well as countermeasures to defend against them. Learn how to design secure software/hardware systems and networks; explore intrusion detection, cryptographic protocols, firewalls, and access control, among other topics.",
    Cybersecurity_Concentration_Courses,
    124
);
const Data_Science_Concentration = makeDegree(
    "Data Science Concentration",
    "Data is everywhere. Large and diverse datasets representing every aspect of modern life are now available. These data come in a variety of forms that can be either structured or unstructured. Data science is concerned with translating these disparate data sources into useful knowledge, through application of techniques drawn from computer science, mathematics, and statistics. The data science concentration provides the core background necessary for representing, analyzing, managing and putting these datasets to use in real-world applications. This concentration combines courses in advanced mathematics, statistics, artificial intelligence, machine learning, and data mining, preparing students to make contributions in this highly interdisciplinary field.",
    Data_Science_Concentration_Courses,
    124
);
const High_Performance_Computing_Concentration = makeDegree(
    "Hight Performace Computing Concentration",
    "High Performance Computing researchers and engineers are applying the world’s most powerful computers to a wide array of scientific and engineering challenges, including climate modeling, weather prediction, the design of aircraft, skyscrapers, and automobiles, the development of new pharmaceuticals and medical treatments, modeling of the human brain, galactic interaction, and the nature of matter. The HPC concentration delves into all aspects of these advanced computing systems, from the hardware level to the programming languages, parallel algorithms, mathematical underpinnings, and applications. The concentration also offers a choice between a data track which focuses on data analysis and statistics, and an applied mathematics track which focuses on the mathematical tools used to model real-world phenomena.",
    High_Performance_Computing_Concentration_Courses,
    124
);
const Systems_and_Networks_Concentration = makeDegree(
    "Systems and Networks Concentration",
    "Are you interested in implementing a new programming language or a virtual machine for a new computer or network architecture? Contributing to the next operating system or Internet of everything? Improving the security of software and networks? Then the Systems and Networks concentration is for you. Through a range of courses covering operating systems, compilers, architecture, networks, and cybersecurity, students learn how modern computational systems function from the application layer all the way down to the hardware-software interface.",
    Systems_and_Networks_Concentration_Courses,
    124
);
const Theory_and_Computation_Computation = makeDegree(
    "Theory and Computation Concentration",
    "The Theory and Computation concentration bridges the mathematics-computer science interface. Applications flow in both directions: mathematical concepts, such as formal logic, automata, and models of computation, form the theoretical foundation of computer science, while computational methods are widely used in many areas of mathematics, including linear algebra, graph theory, differential equations, algebra, theorem proving, and algorithmic analysis. The concentration offers a broad spectrum of courses in these and other subjects in mathematics and computer science. Students in the concentration have a choice between a â€œdiscreteâ€ and a continuous track.",
    Theory_and_Computation_Computation_Courses,
    124
);
// lists of all courses and degrees
const AllDegrees = [
    NoDegree,
    Artificial_Intelligence_and_Robotics_Concentration,
    Bioinformatics_Concentration,
    Cybersecurity_Concentration,
    Data_Science_Concentration,
    High_Performance_Computing_Concentration,
    Systems_and_Networks_Concentration,
    Theory_and_Computation_Computation
];
console.log(AllDegrees);

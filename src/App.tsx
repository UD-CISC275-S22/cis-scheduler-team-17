import React, { useState } from "react";
import "./App.css";
//import { UnderConstruction } from "./components/Underconstruction";
import SchedulerPage from "./components/SchedulerPage";
import Homepage from "./components/Homepage";
//interfaces
import { AllDegrees } from "./interfaces/AllCourses-AllDegrees";
import { Degree } from "./interfaces/course-Degree-Semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

function App(): JSX.Element {
    //page states
    const [homepage, setHomepage] = useState<boolean>(true);
    const changeHomepage = () => {
        setHomepage(!homepage);
    };

    //degree states from dropdown degree
    const degrees = [...AllDegrees];
    const [degree, setDegree] = useState<Degree>(degrees[0]);
    function updateDegree(event: ChangeEvent) {
        const newDegreeName = event.target.value;
        const newDegree = degrees.find(
            (degree: Degree): boolean => degree.name === newDegreeName
        );
        if (newDegree !== undefined) {
            setDegree(newDegree);
        }
    }
    return (
        <div className="App">
            <div>
                {homepage && (
                    <Homepage
                        changeHomepage={changeHomepage}
                        degrees={degrees}
                        degree={degree}
                        updateDegree={updateDegree}
                    ></Homepage>
                )}
                <div style={{ display: !homepage ? "block" : "none" }}>
                    <SchedulerPage
                        changeHomepage={changeHomepage}
                        degree={degree}
                        updateDegree={updateDegree}
                    ></SchedulerPage>
                    {console.log(homepage)}
                </div>
            </div>
            {/* <UnderConstruction></UnderConstruction> */}
        </div>
    );
}

export default App;

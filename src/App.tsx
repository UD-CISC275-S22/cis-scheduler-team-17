import React, { useState } from "react";
import "./App.css";
//import { UnderConstruction } from "./components/Underconstruction";
import SchedulerPage from "./components/SchedulerPage";
import Homepage from "./components/Homepage";

//interfaces
import { AllDegrees } from "./interfaces/AllCourses-AllDegrees";
import { allCourses } from "./interfaces/AllCourses-AllDegrees";

function App(): JSX.Element {
    const [homepage, setHomepage] = useState<boolean>(true);
    const changeHomepage = () => {
        setHomepage(!homepage);
    };
    return (
        <div className="App">
            <div>
                {homepage && (
                    <Homepage changeHomepage={changeHomepage}></Homepage>
                )}
                <div style={{ display: !homepage ? "block" : "none" }}>
                    <SchedulerPage
                        changeHomepage={changeHomepage}
                        degrees={AllDegrees}
                        courses={allCourses}
                    ></SchedulerPage>
                    {console.log(homepage)}
                </div>
            </div>
            {/* <UnderConstruction></UnderConstruction> */}
        </div>
    );
}

export default App;

import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import SchedulerPage from "./components/pages/SchedulerPage";
//import Homepage from "./components/pages/Homepage";
import { UnderConstruction } from "./components/Underconstruction";
import "./App.css";

function App(): JSX.Element {
    return (
        <div>
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <UnderConstruction></UnderConstruction>
            <footer className="footer">
                Constributers: Team 17
                <br></br>Rosemarie Filano, Sydney Hester, Zoe Valladares
            </footer>
            {/*<Router>
                <Routes>
                    <Route path="/homepage" element={<Homepage />} />
                    <Route path="/make-schedule" element={<SchedulerPage />} />
                </Routes>
            </Router>*/}
        </div>
    );
}

export default App;

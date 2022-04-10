import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SchedulerPage from "./components/pages/SchedulerPage";
import Homepage from "./components/pages/Homepage";
//import { UnderConstruction } from "./components/Underconstruction";

function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/make-schedule" element={<SchedulerPage />} />
            </Routes>
        </Router>
    );
}

export default App;

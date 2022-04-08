import React from "react";
import "./App.css";
import { UnderConstruction } from "./components/Underconstruction";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div className="Welcome-Message">
                Welcome to CISC Schedule Planner. <br></br>To get started,
                please click your desired degree.
            </div>
            <UnderConstruction></UnderConstruction>
            <footer className="footer">
                Constributers: Team 17
                <br></br>Rosemarie Filano, Sydney Hester, Zoe Valladares
            </footer>
        </div>
    );
}

export default App;

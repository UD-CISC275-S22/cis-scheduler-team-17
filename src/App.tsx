import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { UnderConstruction } from "./components/Underconstruction";
import SchedulerPage from "./components/SchedulerPage";

function App(): JSX.Element {
    const [page, setPage] = useState<boolean>(false);
    const changePage = () => {
        setPage(!page);
    };
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <Button onClick={changePage}>Make Schedule</Button>
            {page && <SchedulerPage changePage={changePage}></SchedulerPage>}
            <UnderConstruction></UnderConstruction>
            <footer className="footer">
                Constributers: Team 17
                <br></br>Rosemarie Filano, Sydney Hester, Zoe Valladares
            </footer>
        </div>
    );
}

export default App;

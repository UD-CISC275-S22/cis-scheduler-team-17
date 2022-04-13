import React from "react";
import { Button } from "react-bootstrap";
import "../App.css";

export function SchedulerPage({
    changePage
}: {
    changePage: () => void;
}): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>You are planning a [] degree</h3>
            </div>
            <footer className="footer">
                <Button> Back </Button>
            </footer>
        </div>
    );
}

export default SchedulerPage;

import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export function SchedulerPage(): JSX.Element {
    const nav = useNavigate();
    const goToHomepage = () => {
        nav("/homepage");
    };
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>You are planning a [] degree</h3>
            </div>
            <footer className="footer">
                <Button onClick={goToHomepage}> Back </Button>
            </footer>
        </div>
    );
}

export default SchedulerPage;

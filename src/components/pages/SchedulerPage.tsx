import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../App.css";

export function SchedulerPage(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>You are planning a [] degree</h3>
            </div>
        </div>
    );
}

export default SchedulerPage;

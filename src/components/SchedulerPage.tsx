import React from "react";
import { Button, Table } from "react-bootstrap";
import "../App.css";
//import Homepage from "./Homepage";

export function SchedulerPage({
    changeHomepage
}: {
    changeHomepage: () => void;
}): JSX.Element {
    function showSemester(): JSX.Element {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th> Semester + Year </th>
                        </tr>
                        <tr>
                            <th>
                                {/* <Button onClick={() => deleteSemester()}></Button> */}
                            </th>
                        </tr>
                    </thead>
                    <tr> Course ID </tr>
                    <tr> Number of Credits </tr>
                    <tbody>All of the data</tbody>
                </Table>
            </div>
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                Computer & Information Sciences Schedule Planner
            </header>
            <div>
                <h3>You are planning a [] degree</h3>
            </div>
            <div>{showSemester()}</div>
            <footer className="footer">
                <Button onClick={changeHomepage}>Back</Button>
            </footer>
        </div>
    );
}

export default SchedulerPage;

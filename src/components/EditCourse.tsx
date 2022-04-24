import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import "../App.css";
import { AllCourses } from "../interfaces/AllCourses-AllDegrees";
import { FindCourse } from "./FindCourse";

export function EditCourse(): JSX.Element {
    return (
        <div>
            <div>Please Input the Course ID you want to find</div>
            <FindCourse></FindCourse>
        </div>
    );
}

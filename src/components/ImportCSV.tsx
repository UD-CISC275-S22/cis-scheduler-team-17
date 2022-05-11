import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { CsvToHtmlTable } from "react-csv-to-table";

export function ImportCSV(): JSX.Element {
    const [content, setContent] = useState<string>("No file data upload");

    function uploadFile(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length) {
            // Get the first filename
            const filename = event.target.files[0];
            // Create a reader
            const reader = new FileReader();
            // Create lambda callback to handle when we read the file
            reader.onload = (loadEvent) => {
                // Target might be null, so provide default error value
                const newContent =
                    loadEvent.target?.result || "Data was not loaded";
                // FileReader provides string or ArrayBuffer, force it to be string
                setContent(newContent as string);
            };
            // Actually read the file
            reader.readAsText(filename);
        }
    }

    return (
        <div>
            <CsvToHtmlTable
                data={content}
                csvDelimiter='","'
                tableClassName="table table-striped table-hover"
            />
            <Form.Group controlId="exampleForm">
                <Form.Label>Upload a file</Form.Label>
                <Form.Control type="file" onChange={uploadFile} />
            </Form.Group>
        </div>
    );
}

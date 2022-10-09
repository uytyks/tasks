import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");

    function updateAns(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAns(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formCheckAns">
                <Form.Label>Enter Your Answer:</Form.Label>
                <Form.Control value={ans} onChange={updateAns} />
            </Form.Group>
            {ans === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}

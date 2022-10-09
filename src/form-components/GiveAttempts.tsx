import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [numRAttempts, setNumRAttempts] = useState<string>("");
    const realNum = parseInt(numRAttempts) || 0;
    return (
        <div>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={numRAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumRAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() => setNumAttempts(numAttempts - 1)}
                    disabled={numAttempts < 1}
                >
                    Use
                </Button>
                <Button onClick={() => setNumAttempts(numAttempts + realNum)}>
                    Gain
                </Button>
            </div>
            <div>Attempts Left : {numAttempts}</div>
        </div>
    );
}

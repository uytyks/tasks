import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-check"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
            </div>
            {editMode && (
                <div>
                    <Form.Group controlId="setName">
                        <Form.Label>Enter Student Name: </Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Are you a student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                </div>
            )}
            {!editMode && (
                <div>
                    {name} is {student ? "a student." : "not a student"}
                </div>
            )}
        </div>
    );
}

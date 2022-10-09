import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "white",
        "black",
        "purple",
        "orange"
    ];
    const [color, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change The Color</h3>
            {COLORS.map((Ccolor: string) => (
                <Form.Check
                    inline
                    style={{ backgroundColor: Ccolor }}
                    type="radio"
                    name="colors"
                    key={Ccolor}
                    onChange={updateColor}
                    id="check-color"
                    label={Ccolor}
                    value={Ccolor}
                    checked={Ccolor === color}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                <div>You have chosen {color}</div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [lDie, setLDie] = useState<number>(1);
    const [rDie, setRDie] = useState<number>(2);

    return (
        <div>
            <span data-testid="left-die">------{lDie}------</span>
            <span data-testid="right-die">------{rDie}------</span>
            <div></div>
            <Button onClick={() => setLDie(d6)}>Roll Left</Button>
            <Button onClick={() => setRDie(d6)}>Roll Right</Button>
            {lDie !== 1 && rDie !== 1 && lDie === rDie && <div>You Win!</div>}
            {lDie === 1 && rDie === 1 && lDie === rDie && <div>You Lose!</div>}
        </div>
    );
}

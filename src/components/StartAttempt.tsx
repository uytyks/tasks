import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [quizP, setQuizP] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function quizStart(): void {
        setQuizP(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>Attempts : {attempts}</div>
            <Button onClick={quizStart} disabled={quizP || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={() => setQuizP(false)} disabled={!quizP}>
                Stop Quiz
            </Button>
            <Button onClick={() => setAttempts(attempts + 1)} disabled={quizP}>
                Mulligan
            </Button>
        </div>
    );
}

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qtype, setQtype] = useState<QuestionType>(
        "multiple_choice_question"
    );
    const TOGGLE: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question"
    };
    function questionChange(): void {
        const newType = TOGGLE[qtype];
        setQtype(newType);
    }
    return (
        <div>
            <Button onClick={questionChange}>Change Type</Button>
            {qtype === "short_answer_question" && <div>Short Answer</div>}
            {qtype === "multiple_choice_question" && <div>Multiple Choice</div>}
        </div>
    );
}

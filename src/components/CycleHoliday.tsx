import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎇" | "🎂" | "🎃" | "🦃" | "🎄";

    const [hol, setHol] = useState<Holiday>("🎃");
    const ALPHORDER: Record<Holiday, Holiday> = {
        "🎂": "🎄",
        "🎄": "🎃",
        "🎃": "🎇",
        "🎇": "🦃",
        "🦃": "🎂"
    };
    const YEARORDER: Record<Holiday, Holiday> = {
        "🎇": "🎂",
        "🎂": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎇"
    };
    return (
        <div>
            <div>Holiday: {hol}</div>
            <Button onClick={() => setHol(ALPHORDER[hol])}>
                Change by Alphabet
            </Button>
            <Button onClick={() => setHol(YEARORDER[hol])}>
                Change by Year
            </Button>
        </div>
    );
}

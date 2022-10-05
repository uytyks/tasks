import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [vis, setVis] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setVis(!vis)}>Reveal Answer</Button>
            {vis && <div>42</div>}
        </div>
    );
}

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
    const [rollL, setRollL] = useState<number>(3);
    const [rollR, setRollR] = useState<number>(2);
    return (
        <div>
            <span>
                <Button onClick={() => setRollL(d6())}>Roll Left</Button>
            </span>
            <span>
                <Button onClick={() => setRollR(d6())}>Roll Right</Button>
                {rollR === 1 && rollL === 1 ? "you Lose at dice      \n" : ""}
                {rollR !== 1 && rollL === rollR
                    ? "you Win at dice      \n"
                    : ""}
            </span>
            <span data-testid="left-die">die one: {rollL}</span>
            <span data-testid="right-die">die two: {rollR}</span>
        </div>
    );
}

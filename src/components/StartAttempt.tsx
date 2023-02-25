import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    return (
        <span>
            <Button
                onClick={() => setProgress(true)}
                disabled={progress === true || attempts === 0}
            >
                Start Quiz
            </Button>
            {progress && <div>quiz progress is Active</div>}.
            <Button onClick={() => setProgress(false)}>Stop Quiz</Button>
            {!progress && <div>quiz progress is Stopped</div>}.
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
            current attempts: {attempts}.
        </span>
    );
}

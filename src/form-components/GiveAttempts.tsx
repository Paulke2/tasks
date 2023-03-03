import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remaining, setRemaining] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");
    const beingRequested = parseInt(requested) || 0;
    return (
        <div>
            <span>
                <Button
                    disabled={remaining - beingRequested <= 0}
                    onClick={() => setRemaining(remaining - 1)}
                >
                    use
                </Button>
            </span>
            <span>
                <Button
                    onClick={() => {
                        setRemaining(remaining + beingRequested);
                        setRequested("0");
                    }}
                >
                    gain
                </Button>
            </span>
            <h3>Give Attempts</h3>
            <Form.Group controlId="add-attempts">
                <Form.Label>Released:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(event.target.value)
                    }
                />
            </Form.Group>
            Attemps remaining: {remaining}
            Being requested:
            {beingRequested}
        </div>
    );
}

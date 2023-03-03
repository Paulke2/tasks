import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [Answer, setAnswer] = useState("");
    const check = Answer === expectedAnswer ? "✔️" : "❌";
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formMovieName">
                <Form.Label>Give Answer:</Form.Label>
                <Form.Control
                    value={Answer}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAnswer(event.target.value)
                    }
                />
            </Form.Group>
            {check}
        </div>
    );
}

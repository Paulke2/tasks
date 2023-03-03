import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const check = choice === expectedAnswer ? "✔️" : "❌";
    return (
        <div>
            <Form.Group controlId="questions">
                <Form.Label>make your best guess.</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                        setChoice(event.target.value)
                    }
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            Your answer is: {check}
        </div>
    );
}

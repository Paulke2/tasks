import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("blue");
    return (
        <div>
            <Form.Check
                inline
                type="radio"
                style={{
                    backgroundColor: "red",
                    display: "inline-block"
                }}
                name="red"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-red"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                style={{
                    backgroundColor: "blue",
                    display: "inline-block"
                }}
                name="blue"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="echeck-blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                style={{
                    backgroundColor: "green",
                    display: "inline-block"
                }}
                name="green"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-green"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                style={{
                    backgroundColor: "orange",
                    display: "inline-block"
                }}
                name="orange"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                style={{
                    backgroundColor: "purple",
                    display: "inline-block"
                }}
                name="purple"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                style={{
                    backgroundColor: "black",
                    display: "inline-block"
                }}
                type="radio"
                name="black"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-yellow"
                label="black"
                value="black"
                checked={color === "black"}
            />
            <Form.Check
                inline
                type="radio"
                style={{
                    backgroundColor: "yellow",
                    display: "inline-block"
                }}
                name="yellow"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-yello"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="pink"
                style={{
                    backgroundColor: "pink",
                    display: "inline-block"
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="check-pink"
                label="pink"
                value="pink"
                checked={color === "pink"}
            />
            <span>
                The current color is:
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </span>
        </div>
    );
}

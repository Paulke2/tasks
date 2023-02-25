import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header role="bannder" className="App-header">
                UD CISC275 with React Hooks and TypeScript. Hello! Welcome
            </header>
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <div className="App-col-header">Contact Info</div>
                        <ul>
                            <li>email: paulke@udel.edu</li>
                            <li>
                                Github:{" "}
                                <a href="url">https://github.com/Paulke2</a>
                            </li>
                            <li>Phone:(302) 757-3407</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="App-col-header"> More about me</div>
                        <img
                            src={require("./myDogs.jpg")}
                            width="375"
                            height="500"
                            alt="these are my dogs Maggie and Chloe"
                        />
                    </Col>
                </Row>
            </Container>

            <h1>Paul Kearney</h1>
            <header>Hello World</header>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;

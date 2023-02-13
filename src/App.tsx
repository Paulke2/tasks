import { Button, Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header role="bannder" className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
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
                            src="../assets/images/myDogs.jpg"
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
        </div>
    );
}

export default App;

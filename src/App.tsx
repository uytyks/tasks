import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import homie from "./assets/homie.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>It is me.</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h2>
                That&apos;s crazy, my name is Zachary England, and you&apos;re
                watching Disney Channel, Hello World!
            </h2>
            <div>
                My Favorite Things:
                <ul>
                    <li>My homie</li>
                    <li>My homie</li>
                    <li>My homie</li>
                    <li>My homie when he&apos;s feeling down</li>
                </ul>
            </div>
            <p>A pic of my homie (goes hard)</p>
            <img
                src={homie}
                alt="This is my homie, I love him."
                style={{ height: "200px", width: "200px" }}
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First Column
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Second Column
                            <div
                                style={{
                                    width: "200px",
                                    height: "100px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import insta from "./insta.svg";
import "./App.css";

function App() {
  const [size, setSize] = useState("400");
  const [radius, setRadius] = useState("50");
  const [color, setColor] = useState("#55b9f3");

  const [distance, setDistance] = useState("20");
  const [blur, setBlur] = useState("50");
  const [intensity, setIntensity] = useState("5");

  return (
    <div style={{ background: color, height: "100vh" }}>
      <Container fluid={true}>
        <Row>
          <Col md={2}></Col>
          <Col className="d-flex align-items-center justify-content-center mt-5">
            <div>
              <div
                style={{
                  height: size + "px",
                  width: size + "px",
                  background: color,
                  borderRadius: radius + "px",
                  boxShadow:
                    distance + "px " + distance + "px " + blur + "px #888888"
                }}
              />
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column mt-5">
              Color
              <div className="d-flex flex-row justify-content-between">
                <input
                  type="color"
                  onChange={e => setColor(e.target.value)}
                  value={color}
                />
                <input type="text" value={color} />
              </div>
              size
              <input
                type="range"
                onChange={e => setSize(e.target.value)}
                value={size}
                min="1"
                max="400"
              />
              Radius
              <input
                type="range"
                onChange={e => setRadius(e.target.value)}
                value={radius}
                min="1"
                max="50"
              />
              Distance
              <input
                type="range"
                onChange={e => setDistance(e.target.value)}
                value={distance}
                min="1"
                max="50"
              />
              Blur
              <input
                type="range"
                onChange={e => setBlur(e.target.value)}
                value={blur}
                min="1"
                max="50"
              />
              Intensity
              <input
                type="range"
                onChange={e => setIntensity(e.target.value)}
                value={intensity}
                min="1"
                max="60"
              />
            </div>

            <div className="display-pro">
              height: {size}px;
              <br />
              border-radius: {radius}px;
              <br />
              background: {color};<br />
              boxShadow: {distance}px {distance}px {blur}px #888888;
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      <div className="d-flex flex-row justify-content-between bottom-btns">
        <div className="insta-btn">
          <a
            href="https://www.instagram.com/shivam_mak"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={insta}
              className="insta-logo"
              alt="insta"
              style={{
                padding: "5px",
                borderRadius: "5px",
                boxShadow:
                  distance + "px " + distance + "px " + blur + "px #888888"
              }}
            />
          </a>
        </div>
        <a
          className="bmc-button"
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.buymeacoffee.com/NW9rtLZ"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            alt="Buy me a coffee"
          />
          <span style={{ marginLeft: "15px", fontSize: "28px" }}>
            Buy me a coffee
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;

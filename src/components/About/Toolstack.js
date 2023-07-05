import React from "react";
import { Col, Row } from "react-bootstrap";
import {BsDiscord} from "react-icons/bs";
import {SiNetlify} from "react-icons/si";
import {SiSublimetext} from "react-icons/si";
import {FaAtom} from "react-icons/fa";
import {BsMicrosoftTeams} from "react-icons/bs";
import {SiAnaconda} from "react-icons/si";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsDiscord />
        <h3>DISCORD</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3>VS CODE</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3>POSTMAN</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h3>SLACK</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h3>VERCEL</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h3>NETLIFY</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSublimetext />
        <h3>SUBLIME TEXT</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAtom />
        <h3>ATOM</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <h3>ANACONDA</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoftTeams />
        <h3>MICROSOFT TEAMS</h3>
      </Col>
    </Row>
  );
}

export default Toolstack;

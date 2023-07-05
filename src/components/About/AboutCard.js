import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subham Swain </span>
            from <span className="purple"> Rourkela,Odisha.</span>
            <br /> I have 1.6 years experience as a software developer.
            <br />
            <br/>
            <h3>EXPERIENCE</h3>
            <li className="about-activity">
            <ImPointRight /> I am currently as a Trainee Frontend developer at
            FunctionUp from March 2023 to present.
            </li>
            <li className="about-activity">
            <ImPointRight /> Innefu Labs Pvt ltd(Aug 2022 to Dec 2022)
            </li>
            <li className="about-activity">
            <ImPointRight /> Target Integration(Feb 2022 to Aug 2022)
            </li>
            <li className="about-activity">
            <ImPointRight />  IWCN(Aug 2021 to Feb 2022)
            </li>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton and cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling to new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Subham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

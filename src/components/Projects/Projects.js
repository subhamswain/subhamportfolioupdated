import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import digitalsignature from "../../Assets/Projects/digitalsignature.png";
import googledocsclone from "../../Assets/Projects/googledocsclone.png";
import gymwebsite from "../../Assets/Projects/gymwebsite.png";
import twitterclone from "../../Assets/Projects/twitterclone.png";
import cryptoapp from "../../Assets/Projects/cryptoapp.png";
import realstateproject from "../../Assets/Projects/realstateproject.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digitalsignature}
              isBlog={false}
              title="digitalsignature"
              description="Technology->HTML | CSS | Javascript | Jquery(Apr 2023).In this project, employees use this to sign their signature for the organization. So in this project created a left sidebar and a right sidebar when someone writes his name, company name, job title, etc. it will appear in the right sidebar automatically then we can copy that signature and paste it into the email."
              ghLink="https://github.com/subhamswain/subhamdigitalsignature"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googledocsclone}
              isBlog={false}
              title="googledocsclone"
              description="Technology->React Js | CSS | Material UI(June 2023).Created a Google Docs web application that replicates the basic functionality. Google Docs is a popular cloud-based document editor that allows multiple users to collaborate on documents in real-time. By building a clone of google docs, we aim to provide a similar collaborative document editing experience. Google docs clone empowers users with essential productivity tools, such as spell-checking, word count, and easy formatting options."
              ghLink="https://github.com/subhamswain/googlecloneready"
              demoLink="https://googlecloneready.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymwebsite}
              isBlog={false}
              title="gymwebsite"
              description="Technology->React Js | CSS | Material UI | Carousel(July 2023).Gym website designed to inspire and empower fitness enthusiasts. Discover our state-of-the-art facilities, a diverse range of services, and flexible membership options. With stunning visuals and interactive carousels, we showcase our gym unique features and success stories. Join us on this fitness journey and unlock your full potential with our innovative online platform. I am passionate about creating an
              immersive online experience that promotes fitness and encourages user engagement."
              ghLink="https://github.com/subhamswain/gymfitnesssubham"
              demoLink="https://gymfitnesssubham.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitterclone}
              isBlog={false}
              title="twitterclone"
              description="Technology->React Js | Redux | CSS | Material UI (May 2023) .Created a Twitter Clone web application where users can post short messages called tweets, follow other users, and engage in real-time conversations. Users can compose and post new tweets. The tweet composer could include character limits, and image uploading. Users can follow/unfollow other users, and follower count."
              ghLink="https://github.com/subhamswain/subhamtwitterfinal"
              demoLink="https://subhamtwitterfinal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoapp}
              isBlog={false}
              title="cryptapp"
              description="Technology->React Js | Redux | CSS | Chakra UI (July 2023) .The Crypto Tracker App built using React.js and Chakra UI will provide users with an intuitive and visually appealing platform to monitor cryptocurrency prices and trends. The app's responsive design and interactive features will enhance the user experience and make it easy for users to keep track of their favorite cryptocurrencies in real-time."
              ghLink="https://github.com/subhamswain/cryptoappready/tree/cryptoappready"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realstateproject}
              isBlog={false}
              title="realstateproject"
              description="Technology->React Js | CSS (July 2023) .Realestate website real estate agency that allows users to browse and search for houses and properties available for sale or rent. The website should provide a user-friendly interface to display property details, images, amenities, and other relevant information. ."
              ghLink="https://github.com/subhamswain/Realstateproject"
              demoLink="https://realstateproject-orpin.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

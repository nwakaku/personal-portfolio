import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import creativecorner from "../../Assets/Projects/creativecorner.jpg";
import materialhub from "../../Assets/Projects/materialhub.jpg";
import transak from "../../Assets/Projects/transak.JPG";
import drop from "../../Assets/Projects/drop.jpg";
import church from "../../Assets/Projects/church.jpg";
import instaclone from "../../Assets/Projects/instaclone.jpg";

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
              imgPath={instaclone}
              isBlog={false}
              title="Instaclone"
              description="Web3 InstaClone is a photo-sharing app that lets you connect with brands, celebrities, thought leaders, friends, family, and more., without worrying about their privacy."
              ghLink="https://github.com/nwakaku/instaclone"
              demoLink="https://instaclone-nwakaku.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={church}
              isBlog={false}
              title="KingdomDiplomats Church Website"
              description="This is my church website Kingdom Diplomats church website....built with reactJs "
              ghLink="https://kingdomdiplomats.vercel.app/"
              demoLink="https://kingdomdiplomats.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transak}
              isBlog={false}
              title="CryptoWallet TopUp"
              description="Web3 Transak website that integrates developer toolkit to let users buy/sell crypto thereby making it easier for Degens to interact with blockchain .."
              ghLink="https://github.com/nwakaku/trasak-project"
              demoLink="https://trasak-project.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={materialhub}
              isBlog={false}
              title="MaterialHub"
              description="This is a clothing and material ecommerce website that deals and handles the sells of clothing material in Nigeria."
              ghLink="https://github.com/nwakaku/simplecommerce"
              demoLink="https://nwakaku.github.io/simplecommerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drop}
              isBlog={false}
              title="UDrop-It"
              description="UDrop_It is a video saving WebApp that users can save their short clip video and share it with their fans privately "
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://gitcoin-filecoin.vercel.app/videos"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creativecorner}
              isBlog={false}
              title="CreativeCorner"
              description="An International Team Of Creative And Motivated People From All Walks Of Life. Who Collectively Believe That They Can Achieve Their Goals And Provide High Quality Services To Their Clients At The Same Time. Their Aim Is To Create Win-Win Situations And Let Our Work Speak For Itself!."
              ghLink="https://github.com/nwakaku/atecker"
              demoLink="https://creativecorner.space/" // <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

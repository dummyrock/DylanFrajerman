import Tile from "../tiles/tile";
import "./Homepage.css";
import eaglesStadium from "../assets/eagles-stadium.jpg";
import doseAlert from "../assets/doseAlert.png";
import talentTrail from "../assets/talentTrail.png";
import fowradProp from "../assets/forwardProp.png";
import lightsOut from "../assets/lightsOut.png";
import piCamera from "../assets/piCamera.png";

export default function Homepage() {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${eaglesStadium})` }}>
        <h1>My Portfolio</h1>
        <p>Showcasing my work and projects</p>
      </div>

      <main>
        <div>
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <Tile title="DoseAlert" image={doseAlert} description="HenHacks 2025 Project" link="https://github.com/dummyrock/henHacks2025"/>
            <Tile title="Talent Trail" image={talentTrail} description="CISC 275 Final Project" link="https://github.com/weiss122460/CISC275_Final"/>
            <Tile title="Lights Out" image={lightsOut} description="CISC 181 Final Project" link="https://ud-s24-cisc181.github.io/final-project-dummyrock/"/>
          </div>
          <div className="project-grid">
            <Tile title="Forward Propegation" image={fowradProp} description="Custom forward propegation for survival of the fittest model" link="https://github.com/dummyrock/TestFowardProp"/>
            <Tile title="Raspberry Pi Launch Monitor" image={piCamera} description="WIP Launch Monitor using raspberry pi" link='https://github.com/dummyrock/piCamera2.0'/>
          </div>

        </div>
      </main>
    </div>
  );
}

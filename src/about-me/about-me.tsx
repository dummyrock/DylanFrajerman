import "./about-me.css";
import myPhoto from "../assets/professionalImage.jpg"; // Replace with the path to your image

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img src={myPhoto} alt="Dylan Frajerman" className="profile-photo" />
      <h1>About Me</h1>
      <p>
        Hi! I’m Dylan, a Computer Science student at the University of Delaware, currently
        pursuing a Bachelor’s degree with a minor in Cybersecurity. I’m passionate about
        software development, learning new technologies, and building projects that solve
        real-world problems.
      </p>

      <p>
        I’m currently exploring web development, software engineering, and cybersecurity, 
        with the goal of becoming a software engineer after graduation. I enjoy coding,
        problem-solving, and participating in hackathons and programming challenges.
      </p>

      <p>
        Outside of tech, I practice Brazilian Jiu-Jitsu, enjoy sports, and like to stay
        active. I value teamwork, collaboration, and continuously improving my skills.
      </p>
    </div>
  );
}

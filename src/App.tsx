import ScrollToTop from './ScrollToTop';
import { useState } from "react";
import axios from "axios";
import pfpImage from './assets/pfp.jpg';
import linkedInImage from './assets/linkedIn.png';
import likeImage from './assets/like-button-facebook-logo-png-transparent.png';
import resumePDF from './assets/resume.pdf'; // You'll need to add your resume PDF to assets folder

function App() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <div id="home">
        <h1 className="welcome">
          <span>WELCOME TO MY PORTFOLIO</span>
        </h1>
        <div className="welcome-content">
          <img className="pfp" src={pfpImage} alt="Profile picture"></img>
          <div className="introduction">
            <h2>Hello! I'm Vibhas Ramani</h2>
            <p className="intro-text">
              Welcome to my digital portfolio! I'm a Computer Science student at the University of Maryland with a passion for 
              technology and problem-solving. This portfolio showcases my background, experiences, and projects that reflect 
              my journey in tech so far.
            </p>
            <p className="intro-text">
              Feel free to navigate through the different sections using the menu above. You'll find information about me, 
              my resume, projects I've worked on, and ways to get in touch. I hope this gives you a good sense of who I am 
              and what I'm capable of!
            </p>
          </div>
        </div>
      </div>

      <div id="aboutme">
        <h2 className="aboutMe">
          About Me
        </h2>
        <p className="about">
          Born and raised in Jamaica, I am currently 19 years old and attending the University
          of Maryland USA. As a kid I always had big dreams to help others and solve issues which were going 
          around the world. As a result, my CS journey began with a book of inventions which I keep to this
          day. These inventions were first realized with a World Robotics Olympiad in Jamaica. I was attending
          Hillel Academy at the time and we placed second. It was exhilarating. The thrill I got from participating
          in the competition made me realize that this was what I wanted to do, and further cemented my path
          to becoming a computer science student. Subsequently I ended up joining the computer science club at
          my school and then finally pursuing a degree of computer science at the University of Maryland.
          <br></br>
          <br></br>
          My identities as a Jamaican international student have shaped my perspective, giving me a unique lens through
          which I approach problem-solving. I value innovation, community, and perseverance, which is reflected in my
          academic pursuits and extracurricular activities. Growing up in Jamaica, I learned to be resourceful and creative
          in finding solutions, traits that continue to serve me well in my studies and projects.
          <br></br>
          <br></br>
          In regards to other aspects of my life apart from CS, I tend to enjoy reading, exercising, playing
          the piano, journaling, playing video games and watching informational videos. I also have a passion
          for leading, speaking and helping others, as can be seen by the things listed in my resume where I founded
          the peer counselor organization in my school, delivering a welcome speech for the governor general of
          Jamaica and taking on several leadership positions at my high school.
        </p>
      </div>

      <div id="projects">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Chest X-Ray Analysis Tool</h3>
            <p>Developed a web application for Children's National Hospital for analyzing pediatric chest X-rays.</p>
            <p>Built responsive front-end components including interactive upload cards and dynamically updated tables linked to Supabase.</p>
            <div className="skills-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">SASS</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Media Queries</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Brain Scan AI Integration</h3>
            <p>Implemented a brain scan AI model using ABIDE datasets and a brain atlas into a web application at Children's National Hospital.</p>
            <p>Created a registration system and streamlined data visualization with paginated tables.</p>
            <div className="skills-tags">
              <span className="skill-tag">FastAPI</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Tailwind</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Nibabel</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Marshie Guard Chrome Extension</h3>
            <p>Developed during Bitcamp Hackathon 2024, creating a security tool that detects malicious links and email breaches.</p>
            <p>Won the "Marshmallow Maker" prize for outstanding innovation and design in cybersecurity tools.</p>
            <div className="skills-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Chrome API</span>
              <span className="skill-tag">JSON</span>
              <span className="skill-tag">Web Security</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A responsive personal portfolio website built with React and Vite, featuring animations and responsive design.</p>
            <div className="skills-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Vite</span>
            </div>
          </div>
          <div className="project-card">
            <h3>Interactive Calendar</h3>
            <p>Developed an interactive calendar application during AppDev Club Bootcamp at UMD.</p>
            <div className="skills-tags">
              <span className="skill-tag">CSS Grid</span>
              <span className="skill-tag">Flexbox</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
            </div>
          </div>
          <div className="project-card">
            <h3>World Robotics Olympiad</h3>
            <p>Second place national winner at World Robotics Olympiad Jamaica, October 2018.</p>
            <div className="skills-tags">
              <span className="skill-tag">Robotics</span>
              <span className="skill-tag">Engineering</span>
              <span className="skill-tag">Problem Solving</span>
            </div>
          </div>
        </div>
      </div>

      <div id="resume">
        <h2 className="resume-heading">Resume</h2>
        <div className="resume-container">
          <div className="resume-preview">
            <h3>Education</h3>
            <p><strong>University of Maryland College Park</strong> - Bachelor of Arts in Computer Science (Aug 2023 - May 2027)</p>
            <p><strong>Hillel Academy, Jamaica</strong> - High School Diploma, IB Program</p>
            
            <h3>Experience</h3>
            <p><strong>Children's National Hospital - AppDev</strong> - Software Engineer (Feb 2025 - Present)</p>
            <p><strong>Children's National Hospital - AppDev</strong> - Software Engineer (Sep 2024 - Mar 2025)</p>
            <p><strong>Bitcamp</strong> - Backend Developer/Coordinator (Apr 2024)</p>
            <p><strong>AppDev Club at UMD</strong> - Boot-camp Member (Jan 2024 - May 2024)</p>
            <p><strong>Hillel Academy, Jamaica</strong> - Head Boy of the Prefect Body (Feb 2022 - Mar 2023)</p>
            
            <h3>Technical Skills</h3>
            <div className="skills-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">R</span>
              <span className="skill-tag">Assembly</span>
              <span className="skill-tag">OCaml</span>
              <span className="skill-tag">Rust</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">JUnit</span>
              <span className="skill-tag">FastAPI</span>
            </div>
            
            <h3>Awards</h3>
            <ul className="awards-list">
              <li>IB Hillel Award- Board of Directors Phillip Henriquez (2023)</li>
              <li>RazzleDazzle Award, Bitcamp (Apr 2024)</li>
              <li>OMSE Academic Excellence Award - Nominee (2024)</li>
              <li>Nationals Second Place, World Robotics Olympiad (Oct 2018)</li>
              <li>Creativity, Activity and Service Honor Award (2023)</li>
              <li>Citizenship Award (2023)</li>
            </ul>
          </div>
          <div className="resume-download">
            <p>View or download my complete resume below:</p>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-button">
              View Full Resume
            </a>
          </div>
        </div>
      </div>

      <div id="contact" className="conclusion">
        <h2 className="closing">Let's Connect!</h2>
        <p className="contact-text">
          I'm always open to new opportunities, conversations, and connections. Whether you have a professional 
          inquiry or just want to chat about technology, feel free to reach out!
        </p>
        <div className="contact-info">
          <p><strong>Phone:</strong> <a href="tel:2026799358" className="contact-link">202-679-9358</a></p>
          <p><strong>Email:</strong> <a href="mailto:vibz@terpmail.umd.edu" className="contact-link">vibz@terpmail.umd.edu</a></p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/vibhas-ramani" target="_blank" rel="noopener noreferrer">
              <img className="linkedIn" src={linkedInImage} alt="LinkedIn"></img>
            </a>
            <a href="https://github.com/vibz2" target="_blank" rel="noopener noreferrer" className="github-link">
              <span className="contact-link">GitHub: github.com/vibz2</span>
            </a>
          </div>
        </div>
        <div className="like-section">
          <p>Like my portfolio? Click below!</p>
          <LikeButton />
        </div>
      </div>
    </>
  );
}

function NavBar() {
  return (
    <nav>
      <div>
        <h1 className="logo">Portfolio</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li className="aboutLink">
          <a href="#aboutme">
            About
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function LikeButton() {
  const [click, setClick] = useState(0)

  function HandleClick() {
    setClick(click + 1)
    // If the API endpoint isn't working on GitHub Pages, you can simply handle state locally
    try {
      axios.post("http://localhost:8000/add")
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error("Error:", error);
        })
    } catch (error) {
      console.log("Using local state only");
    }
  }
  return (
    <>
      <button className='likeButton' onClick={HandleClick}>
        <img className='like' src={likeImage} alt="Like button" />
      </button>
      <br></br>
      <button className='count'>
        {click}
      </button>
    </>
  )
}

export default App
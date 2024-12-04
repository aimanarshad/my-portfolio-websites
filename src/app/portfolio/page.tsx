"use client"; // This directive must be the first line in the file
import "./style.css" ;
import { useEffect, useState } from "react";

type SkillBarProps = {
  skill: string;
  percentage: number;
};

function SkillBar({ skill, percentage }: SkillBarProps) {
  const [width, setWidth] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
      setIsAnimating(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <span>{skill}</span>
        <span>{isAnimating ? `${percentage}%` : "0%"}</span>
      </div>
      <div className="skill-bar-progress">
        <div
          className="skill-bar-progress-bar"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Dynamic Route",
      description: "Created using Next.js with dynamic routes for navigation.",
    },
    {
      title: "Resume Builder",
      description: "A resume builder website created using Next.js, HTML, and CSS.",
    },
    {
      title: "Tic Tac Toe Game",
      description: "A simple Tic Tac Toe game built with Next.js, HTML, and CSS.",
    },
    {
      title: "Simple Calculator",
      description: "A basic calculator with essential functions using Next.js.",
    },
    {
      title: "Bank Management System",
      description: "Created using C++ with basic banking functionalities.",
    },
    {
      title: "Todo App",
      description: "Created using TypeScript, HTML, and CSS.",
    },
    {
      title: "Number Guessing Game",
      description: "Created using TypeScript, HTML, and CSS.",
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <div>
      <nav>
        <h1>Portfolio</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home">
        <div>
          <h2>AIMAN</h2>
          <p>Software Engineer | Full-stack Developer</p>
        </div>
        <img
          src="/p.jpeg"
          alt="Profile"
        />
      </section>

      <section id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a software engineering student and full-stack developer skilled
            in Python, Java, and C++. I'm passionate about building responsive,
            efficient applications and continually expanding my technical
            knowledge. My portfolio reflects my commitment to coding and
            problem-solving—let's create something impactful together!
          </p>
          <button onClick={() => alert("Resume Downloaded!")}>Download Resume</button>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <p>
          Here are some of the programming languages and tools I specialize in:
        </p>
        <SkillBar skill="Python" percentage={85} />
        <SkillBar skill="JavaScript" percentage={80} />
        <SkillBar skill="React.js" percentage={75} />
        <SkillBar skill="Node.js" percentage={70} />
      </section>

      <section id="projects">
        <h2>Portfolio</h2>
        <p>Check out some of the projects I have worked on</p>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setShowAllProjects(!showAllProjects)}>
          {showAllProjects ? "Show Less" : "Show More"}
        </button>
      </section>
    </div>
  );
}

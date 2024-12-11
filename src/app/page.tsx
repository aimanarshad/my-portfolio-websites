"use client"; // This directive must be the first line in the file
import Image from 'next/image'
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
    <div>
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{isAnimating ? `${percentage}%` : "0%"}</span>
      </div>
      <div className="w-full bg-gray-300 rounded h-4 overflow-hidden">
        <div
          className={`bg-pink-600 h-4 rounded transition-all duration-2000 ${
            isAnimating ? "animate-blink" : ""
          }`}
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

  // Define your projects here
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
      title: "Bank Mangement system",
      description: "the project is created using c++ and all the basic functions in c++.",
    },
    {
      title: "Todo App",
      description: "Created using typescript and design by using html and css.",
    },
    {
      title: "Number guessing game",
      description: "Created using typescript and design by using html and css..",
    },
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <div
      className="bg-[url('/download.jpg')] bg-cover bg-center 
     text-gray-800 font-sans"
    >

      {/* Navbar */}
      <nav className="bg-pink-600 text-2xl text-white py-4 px-8 flex justify-between">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <ul className="flex gap-12 mx-auto">
          <li>
            <a
              href="#home"
              className="hover:text-pink-300  transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-pink-300 transition duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-pink-300 transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-pink-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Profile Section */}
      <section
        id="home"
        className="flex items-center justify-center py-16 px-8 bg-pink-100"
      >
        <div className="text-center md:text-left">
          <h2 className="text-6xl font-bold text-pink-800">AIMAN</h2>
          <br />
          <p className="text-3xl mt-2 text-pink-700">
            Software Eng | Full-stack developer
          </p>
        </div>
        <Image
          src="/p.jpeg" // Replace with profile image path
          alt="Profile"
          width={80}
          height={80}
          className=" w-80 h-80 rounded-full mt-6 border-4 border-pink-500 transition-transform duration-300 transform hover:scale-110"
        />
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-16 px-6 bg-pink-300 flex justify-center animate-fade-in"
      >
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl text-center hover:bg-red-300 text-white transition duration-300">
          <h2 className="text-4xl font-bold text-pink-800 ">About Me</h2>
          <p className="mt-4 text-pink-700 ">
            I m a software engineering student and full-stack developer skilled
            <br />
            in Python, Java, and C++. I m passionate about building responsive,
            <br />
            efficient applications and continually expanding my technical
            <br />
            knowledge. My portfolio reflects my commitment to coding and
            <br />
            problem-solving—let s create something impactful together
            <br />
          </p>
          <button className="mt-6 px-4 py-2 text-2xl bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-300">
            Download Resume
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-pink-100">
        <h2 className="text-5xl font-bold text-center text-pink-800 mb-2 animate-fade-in">
          01 PROFESSIONAL
        </h2>
        <p className="text-2xl text-center text-pink-700 mb-8 animate-fade-in">
          MY KNOWLEDGE LEVEL IN SOFTWARE
        </p>
        <div className="space-y-7 max-w-xl mx-auto">
          <SkillBar skill="Python" percentage={50} />
          <SkillBar skill="Java" percentage={80} />
          <SkillBar skill="C++" percentage={90} />
          <SkillBar skill="Html" percentage={90} />
          <SkillBar skill="Css" percentage={90} />
          <SkillBar skill="Typescript" percentage={50} />
          <SkillBar skill="Cyber security" percentage={40} />
          <SkillBar skill="Assembly language" percentage={70} />
        </div>
      </section>

      {/* Projects Section with Slide-up Animation and "See More" Button */}
      
      <section id="projects" className="py-16 px-6 bg-pink-200">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-8 animate-fade-in">
          My Portfolio
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white p-4 animate-slide-up"
            >
              <video
                src={`/videos/video${index + 1}.mp4`} // Dynamically referencing the videos
                controls
                className="w-full h-60 object-cover rounded-md transition-transform duration-500 transform hover:scale-105"
              ></video>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-pink-900">
                  {project.title}
                </p>
                <p className="text-lg mt-2 text-pink-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {!showAllProjects && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllProjects(true)}
              className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-300"
            >
              See More
            </button>
          </div>
        )}
      </section>
    
  

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-pink-300 animate-fade-in">
        <h3 className="text-3xl font-bold text-center text-pink-800 mb-4">
          Contact Me
        </h3>

        <form className="max-w-lg mx-auto space-y-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-black">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-pink-500 rounded transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-black">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-pink-500 rounded transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-pink-500 rounded transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-black">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-pink-500 rounded transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-pink-500 rounded transition duration-300"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="additionalInfo" className="block text-black">
              Additional Information
            </label>
            <textarea
              id="additionalInfo"
              rows={2}
              className="w-full px-4 py-2 border border-pink-500 rounded transition duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-4 text-center">
        <p>All rights reserved with Corporation</p>
      </footer>
    </div>
  );
}

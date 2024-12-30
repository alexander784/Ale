import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div className="w-[98%] mx-auto my-4 rounded-md bg-gradient-to-b from-zinc-600 to-zinc-800 flex flex-col items-center justify-center p-6">
      <p className="text-center rounded-md text-white mb-6">
      I am a skilled full-stack developer with 3 years of experience, trained at Moringa.
I specialize in building scalable and efficient online applications using ReactJS, Django, and PHP, with a strong focus on delivering exceptional user experiences and high-performance solutions.

My expertise extends to containerization with Docker, cloud deployment using AWS, and implementing robust CI/CD pipelines to streamline development and ensure rapid, reliable delivery of software.

I am passionate about leveraging modern technologies to solve complex challenges and create innovative solutions that make an impact.
      </p>
      <div className="flex items-center justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/alexander-nyaga-20675733a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-blue-100 transition duration-300"
        >
          <FaLinkedin className="text-blue-600 text-2xl" />
        </a>

        <a
          href="https://x.com/Githinji77"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-blue-100 transition duration-300"
        >
          <FaXTwitter className="text-blue-600 text-2xl" />
        </a>

        <a
          href="https://github.com/alexander784"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-200 transition duration-300"
        >
          <FaGithub className="text-blue-600 text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Aboutme;

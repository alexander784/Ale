import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Aboutme = () => {
  return (
    <div className="w-[98%] mx-auto my-4 rounded-md bg-gradient-to-b from-zinc-600 to-zinc-800 flex flex-col items-center justify-center p-6">
      <p className="text-center rounded-md text-white mb-6">
      I’m a dedicated machine learning and web development specialist who transforms client ideas into reality. I train custom models to meet your unique needs, build tailored websites with Python, Django, and Next.js for a sleek, responsive frontend, and deploy them efficiently using Docker and AWS. My expertise in integrating AI into projects ensures your solutions are smart, scalable, and cutting-edge. From concept to completion, I deliver high-quality, client-driven results that exceed expectations
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

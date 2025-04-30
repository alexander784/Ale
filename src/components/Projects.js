import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import Moringa from "../assets/Moringa.png";
import Flight from "../assets/Flight.png";
import Resume from "../assets/Resume.png";
import hiikers from '../assets/hiikers.png';
import Footing from '../assets/Footing.png';
import django from '../assets/django.png';
import django1 from '../assets/django1.png'
import SoilAnalysis from '../assets/SoilAnalysi1.png';


export function Projects() {
  return (
    <BentoGrid className="max-w-4xl mx-auto bg-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {
        items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            image={item.image}
            className=""
            url={item.url}
          />
        ))
      }
    </BentoGrid>
  );
}

const Skeleton = ({ src, chips }) => (
  <div className="bg-black flex flex-1 w-100 h-full min-h-[6rem] rounded-xl flex-col">
    <img className="h-full w-full object-cover rounded-lg" src={src} />
    <div className="flex flex-row flex-wrap gap-2 mt-3">
      {
        chips?.map((chip) => (
          <div key={Math.random(100)} className="chip py-[3px] px-[6px] text-xs bg-gray-300 text-black dark:text-black rounded-md border-[1px]">{chip}</div>
        ))
      }
    </div>
  </div>
);

const items = [
  {
    title: "Class Pair",
    description: "A system that randomly pairs up students, keeps track of each pair and changes weekly.",
    header: <Skeleton src={Moringa} chips={["React,Bootstrap,Flask,PostgreSQL"]} />,
    icon: "",
    image: "",
    url: "https://moringa-pair-beta.vercel.app/"
  },
  {
    title: "Dockerize Event management",
    description: "THis is a RESTfulAPI for an event management system built with Django and Django REST Framework (DRF), containerized using Docker. This API provides endpoints to manage events and categories, designed for integration with any frontend framework",
    header: <Skeleton src={django1} chips={["Docker","Restful","Python",'django']} />,
    icon: "",
    url: "https://github.com/alexander784/Events"
  },
  {
    title: "Predictive Soil Analysis with Reinforcement Agent",
    description: "This is a Django-based web application for analyzing soil data, predicting soil quality, and providing AI-driven crop suggestions. It features a user-friendly interface with a file upload system, interactive visualizations, and a chatbot powered by a reinforcement learning (RL) agent.",
    header: <Skeleton src={SoilAnalysis} chips={["Python, pandas, django, sci-kit learn"]} />,
    icon: "",
    url: "https://github.com/alexander784/Soil_Analysis"
  },
  {
    title: "Django Authentication with Docker",
    description: "A Django authentication system fully containerized using Docker. It provides user registration, login, logout, and authentication management using Django's built-in authentication system.",
    header: <Skeleton src={django} chips={["Docker,Django python Postgresql"]} />,
    icon: "",
    url: "https://github.com/alexander784/django_auth-with-docker"
  },
  {
    title: "Flight Booking",
    description: "This is a React Flight Booking app that allows users to book flights by selecting their origin and destinations.",
    header: <Skeleton src={Flight} chips={["React,Tailwind CSS,Redux"]} />,
    icon: "",
    url: "https://flight-henna.vercel.app/"
  },
  {
    title: "Resume Builder",
    description: "A web app for creating resumes. Built with React for the frontend and Flask backend, this app allows users to edit, preview their resume, and download the resume.",
    header: <Skeleton src={Resume} chips={["React,Tailwind CSS,Redux,Flask,SQLite"]} />,
    icon: "",
    url: "https://github.com/alexander784/Resume-builder"
  },
];

export default Projects;

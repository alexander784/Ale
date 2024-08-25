import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import Jobs from "../assets/Jobs.png"
import Moringa from "../assets/Moringa.png";
import Booking from "../assets/Booking.png";
import Flight from "../assets/Flight.png";
import Resume from "../assets/Resume.png";


export function Projects()  {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
        {
            items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                image={item.image}
                className={i===3 || i === 6 ? "md:col-span-1" : ""}
                url={item.url}
                />
            ))
        }

    </BentoGrid>
  );
}

const Skeleton = ({ src, chips }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl flex-col">
        <img className="h-full w-full object-cover rounded-lg" src={src} />
        <div className="flex flex-row flex-wrap gap-2 mt-3">
            {
                chips?.map((chip) => (
                    <div key={Math.random(100)} className="chip py-[3px] px-[6px] text-xs bg-gray-300 text-black dark:text-black rounded-md borde-[1px]">{chip}</div>
                ))
            }
        </div>
    </div>
);

const items = [
    {
        title:"Moringa Pair ",
        description: "A system that randomly pairs up students, keeps track of each pair and changes weekly.",
        header:<Skeleton src={Moringa} chips={["React,Bootstrap,Flask posresql" ]}/>,
        icon:"",
        image:"",
        url:"https://moringa-pair-beta.vercel.app/"
    },
    {
        title:"Booking",
        description: "This a react Booking landing page that allows users to search for hotels and view details about available accommodations.",
        header:<Skeleton src={Booking} chips={["React,Tailwindcss" ]}/>,
        icon:"",
        url:"https://booking-jdj6.vercel.app/"
    },
    {
        title:"Flight Booking",
        description: "This a react Flight Booking app that allow users to book flights by selecting their origin and destinations",
        header:<Skeleton src={Flight} chips={["React,Tailwindcss,Redux" ]}/>,
        icon:"",
        url:"https://flight-henna.vercel.app/"
    },
    {
        title:"Resume Builder",
        description: "A web app for creating resumes.Built with React for the frontend and Flask backend, this app allow user to edit, preview your resume and download the resume.",
        header:<Skeleton src={Resume} chips={["React,Tailwindcss,Redux,Flask sqlite" ]}/>,
        icon:"",
        url:"https://github.com/alexander784/Resume-builder"
    },
    

]


export default Projects;
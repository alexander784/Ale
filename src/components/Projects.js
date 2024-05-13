import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';
import Jobs from "../assets/Jobs.png"
import Moringa from "../assets/Moringa.png";

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
        title:"Moringa Pair",
        description: "A system that randomly pairs up students, keeps track of each pair and changes weekly.",
        // header:"fffff",
        icon:"",
        url:""
    },
    {
        title:"Crab Jobs",
        description: "This is a job search website built using React and Tailwind CSS. It allows users to search for job listings based on various criteria such as job title, location, and company",
        header:"",
        icon:"",
        url:Jobs
    },
    

]


export default Projects;
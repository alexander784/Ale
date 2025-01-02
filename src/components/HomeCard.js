import React from 'react'
import { CardBody, CardItem,CardContainer } from './ui/3DCard';
// import cvpic from "../assets/cvpic.png";
import { FaTwitter, FaLinkedin } from "react-icons/fa";


export function HomeCard() {
  return (
    <CardContainer className="inter-var w-fit bg-gray-100 bg-black/[0.8] z-50">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] md:w-[24rem] h-[30rem] rounded-xl p-6 border">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
                {/* Hello, I am Alexander Nyaga */}
                <img 
                src=''
                height="100"
                width="100"
                loading='lazy'
                className='h-64 w-64 object-cover rounded-xl group-hover/card:shadow-xl'
                alt="thumbnail"
                />
        <div className="flex justify-center items-start text-white">
          <div className="flex space-x-4 mt-2">
            <a href="https://x.com/lexandergitchez" className="text-white hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://x.com/lexandergitchez" className="text-white hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
            </CardItem>
        </CardBody>
    </CardContainer>
)}


export default HomeCard;
import React from 'react'
import { CardBody, CardItem,CardContainer } from './ui/3DCard';

export function HomeCard() {
  return (
    <CardContainer className="inter-var w-fit bg-gray-100 dark:bg-gray-700/[0.8] z-50">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] md:w-[24rem] h-[30rem] rounded-xl p-6 border">
            <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
            >
                Hello, I am Alexander Nyaga

            </CardItem>
        </CardBody>
    </CardContainer>
)}


export default HomeCard;
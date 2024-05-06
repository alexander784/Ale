import React from 'react';
import HomeCard from './HomeCard';
import Experience from './Experience';
import Projects from './Projects';


export function Background() {
    return (
        <div className='h-full w-full dark:bg-gray-700 bg-gray-100 dark:bg-grid-gray/[0.1] bg-grid-black/[0.2] relative flex flex-col overflow-auto'>
            <div className='h-full w-full flex flex-col items-center'>
                <div className='py-28 grid grid-col-1 md:grid-cols-2 sm:w-96 md:w-[900px]'>
                    <div>
                        <HomeCard />
                        
                    </div>
                </div>
                <div className='pointer-events-none dark:bg-gray-700 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
                <p className='text-4xl sm:text-7xl font-bold py-8 px-10 md:px-0 relative bg-clip-text text-transparent bg-gradient-to-t from-gray-600 via-gray-500 to-gray-700 dark:bg-gradient-to-t dark:from-gray-400 dark:to-white whitespace-normal'>
                I specialize in crafting dynamic efficient websites tailored to the needs of small,medium-size and large enterprises. With over 2 years of hands on experience in JavaScript and reactjs framework Python flask, I bring a wealth of expertise to every project.
                
                </p>
            </div>
            <div className="md:w-[900px] p-10" id="experiences">
                    <p className="text-4xl pb-4 font-bold">Experiences</p>
                    <Experience />
                </div>
                <Projects />
        </div>
    )
}
import React from 'react';
import HomeCard from './HomeCard';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';

export function Background() {
    return (
        <div className='h-full w-full bg-black dotted-box-effect relative flex flex-col overflow-auto'>
            <div className='h-full w-full flex flex-col items-center'>
                <div className='py-28 grid grid-col-1 md:grid-cols-2 sm:w-96 md:w-[900px]'>
                    <div>
                        <HomeCard />
                    </div>
                    <div>
                        <p className='text-2xl sm:text-2xl py-4 px-4 md:px-0 relative bg-clip-text text-transparent bg-gradient-to-t from-gray-600 via-gray-500 to-gray-700 dark:bg-gradient-to-t dark:from-gray-400 dark:to-white whitespace-normal'>
                            A dedicated Web Developer and API developer with a knack for transforming complex problems into elegant solutions. I specialize in developing dynamic and responsive web applications to improve user experiences.
                        </p>
                    </div>
                </div>
                <div className="md:w-[900px] p-10" id="experiences">
                    <p className="text-4xl pb-4 font-bold">Experiences</p>
                    <Experience />
                </div>
                <div className="md:w-[900px] p-10" id="myProjects">
                    <p className="text-4xl pb-4 font-bold">Projects</p>
                    <Projects />
                </div>
                <Footer />
            </div>
        </div>
    );
}

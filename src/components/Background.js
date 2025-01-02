import React from 'react';
import HomeCard from './HomeCard';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';
import portfolio from "../assets/portfolio.jpg";
import Aboutme from './Aboutme';
import Blog from './Blog';

export function Background() {
    return (
        <div className='h-full w-full bg-zinc-800 dotted-box-effect relative flex flex-col overflow-auto'>
            <div className='h-full w-full flex flex-col items-center'>
                
                <About />

                <Aboutme />

            

                {/* <div className='md:w-900px p-10'>
                        <HomeCard />
                    </div> */}
                {/* <div className="md:w-[900px] p-10" id="experiences">
                    <p className="text-4xl pb-4 font-bold">Experiences</p>
                    <Experience />
                </div> */}
                <div className="md:w-[900px] p-10" id="myProjects">
                    <p className="text-white text-4xl pb-4 font-bold">My Projects</p>
                    <Projects />
                    <p className="text-white text-4xl pb-4 font-bold">My Blogs</p>
                    <Blog />
                </div>
                <Footer />
            </div>
        </div>
    );
}

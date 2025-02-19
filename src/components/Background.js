import React from 'react';
import Projects from './Projects';
import Footer from './Footer';
import About from './About';
import Aboutme from './Aboutme';
import Blog from './Blog';

export function Background() {
    return (
        <div className='h-full w-full bg-zinc-800 dotted-box-effect relative flex flex-col overflow-auto'>
            <div className='h-full w-full flex flex-col items-center'>
                <About />
                <Aboutme />
                <div className="md:w-[900px] p-10" id="Projects">
                    <p className="text-orange-400 text-4xl pb-4 font-bold text-center">My Projects</p>
                    <Projects />
                    <p className="text-orange-400 text-4xl pb-4 font-bold text-center p-4">My Blogs</p>
                    <Blog />
                </div>
                <Footer />
            </div>
        </div>
    );
}

import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const transition = {
    type:"spring",
    mass:0.5,
    damping:11.5,
    stiffness:100,
    restDelta:1.001,
    restSpeed:1.001,
};

const scroll = (scrollTo) => {
    if (scrollTo) {
        const section = document.querySelector(scrollTo);
        Selection?.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
};
export const MenuItem = ({setActive, active,item, children}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className='relative'>
            <motion.p transition={{ duration: 0.3 }}
            className='cursor-pointer text-black hover:opacity-[0.9] dark:text-white text-sm md:text-lg'
            >
                {item}
            </motion.p>

            {
                active !== null && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10}}
                    animate={{ opacity: 1, scale:1, y:0}}
                    transition={transition}
                    >
                        {
                            active === item && (
                                <div className='absolute top-[calc(100%_+_1.4rem)] left-1/2 transform -translate-x-1/2'>
                                    <motion.div transition={transition}
                                    layoutId='active'
                                    className="bg-gray-50 dark:bg-gray-700 backdrop-blur-md dark:backdrop-blur-md rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                                    
                                    >
                                        <motion.div layout className='w-max h-full p-4'
                                        >
                                            {children}
                                        </motion.div>
                                    </motion.div>

                                </div>
                            )
                        }

                    </motion.div>
                )
            }
            

        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full boder border-transparent dark:border-white/[0.2] backdrop-blur-md dark:backdrop-blur-md shadow-input flex justify-center items-center space-x-4 px-8 py-4"
        >
            {children}
        </nav>
    );
};


export const ProductItem = ( {title, description, href, src,scrollTo }) => {
    return (
        <Link to={href} target='_blank' className='flex space-x-2' onClick={() => scroll(scrollTo || '')}>
            <img
            src={src}
            width={140}
            height={70}
            alt={title}
            className='flex-shrink-0 rounded-md shadow-2xl'
            />
            <div>
                <h4 className='text-xl font-bold mb-1 text-black dark:text-white'>
                    {title}
                </h4>
                <p className='text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300'>
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, scrollTo, ...rest }) => {
    return (
        <Link
            {...rest}
            onClick={() => scroll(scrollTo || '')}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white"
        >
            {children}
        </Link>
    );
};




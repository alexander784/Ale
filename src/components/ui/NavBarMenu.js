import React from 'react';
import { motion } from "framer-motion";


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
export const menuItem = ({setActive, active,item, children}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className='relative'>
            <motion.p transition={{ duration: 0.3 }}
            className='cursor-pointer text-black hover:opacity-[0.9]'
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
                                    className="bg-gray-50 dark:bg-gray-700 backdrop-blur-md dark:backdropbackdrop-blur-md rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                                    
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




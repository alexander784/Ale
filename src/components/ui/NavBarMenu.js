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



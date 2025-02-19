import React from "react";
import { motion } from "framer-motion";  
import portfolio from "../assets/portfolio.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="text-center md:text-left md:w-1/2">
            <motion.p
              className="text-lg text-white"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
            >
              <p className="text-orange-400">Hi,my name is </p>
              <p className="font-bold">Alexander Nyaga</p> <br />
              <span className="font-bold text-2xl">
                Transforming your ideas into impactful digital platforms
              </span>{" "}
              <br />
              I’m a software engineer specializing in Web applications and API
              development
            </motion.p>
           
          </div>
          {/* Image Section */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              src={portfolio}
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

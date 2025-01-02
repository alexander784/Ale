import { useState } from "react";
import { cn } from "../utils/cn";
import { Menu, ProductItem, MenuItem } from "./ui/NavBarMenu";
import { HoveredLink } from "./ui/NavBarMenu";
import Moringa from "../assets/Moringa.png";
import Booking from "../assets/Booking.png";
import Flight from "../assets/Flight.png";

function Navbar() {
  return(
    <div className="w-full flex items-center justify-between px-6 py-4 bg-neutral-800 shadow-md">
      <div className="flex items-center">
        <img />
        <span className="text-xl font-bold text-white ">Lexa</span>
      </div>

      <nav className="flex space-x-6">
        <a href="/" className="text-white hover:text-black transition-colors">About</a>
        <a href="blog" className="text-white hover:text-black transition-colors">Blogs</a>
        <a href="/projects" className="text-white hover:text-black transition-colors">Projects</a>
        {/* <a href="#" className="text-white hover:text-black transition-colors">Contact</a> */}


      </nav>

    </div>
  )
}



export default Navbar;

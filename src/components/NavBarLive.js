import { useState } from "react";
import { cn } from "../utils/cn";
import { Menu, ProductItem,  MenuItem } from "./ui/NavBarMenu";
import { HoveredLink } from "./ui/NavBarMenu";
import Moringa from "../assets/Moringa.png";
import Booking from "../assets/Booking.png";
import Flight from "../assets/Flight.png";




export function NavBarLive() {
  return (
    <div className="relative w-full flex items-center justify-start">
      <Navbar className="top-2 md:top-4 border rounded-full mx-4 md:mx-auto border-black/[0.2] dark:border-white/[0.2]"/>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    
    <div 
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border border-red", className)}
    >
        <p className="text-black dark:text-white text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">Alexander Nyaga</p>

      <Menu setActive={setActive}>
        
        <MenuItem setActive={setActive}
         active={active}
          item="Projects">

        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
          <ProductItem 
          title="Moringa Pair"
          href="https://moringa-pair-beta.vercel.app/"
          src={Moringa}
          description="A system that randomly pairs up students, keeps track of each pair and changes weekly."
          />
          <ProductItem 
          title="Booking"
          href="https://booking-jdj6.vercel.app/"
          src={Booking}
          description="This a React landing page that allows users to search for hotels and view details about available accommodations."/>
          
          <ProductItem 
          title="Flight Booking"
          href="https://flight-henna.vercel.app/"
          src={Flight}
          description="This a react Flight Booking app that allow users to book flights by selecting their origin and destinations"/>
          <ProductItem 

          />
        </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink to="https://github.com/alexander784">Github</HoveredLink>
          <HoveredLink to="https://www.linkedin.com/in/alexander-nyaga-b415ab2a1/">LinkedIn</HoveredLink>
          {/* <HoveredLink>Email</HoveredLink> */}
        </div>
        </MenuItem>
      </Menu>
    </div>
  )

}

export default NavBarLive;

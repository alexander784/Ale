import { useState } from "react";
import { cn } from "../utils/cn";
import { ProductItem } from "./ui/NavBarMenu";
import { HoveredLink } from "./ui/NavBarMenu";


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
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border border-red", className)}>
      <menu setActive={setActive}>
        <p className="text-black dark:text-white text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">Alexander Nyaga</p>
        <p classNam=" text-black dark:text-black text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">MB</p>
        <menuItem setActive={setActive} active={active} item="About me">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/interface-design" scrollTo="#experiences">Experiences</HoveredLink>
        </div>
        </menuItem>
        <menuItem setActive={setActive} active={active} item="Projects">
        <div className="text-sm grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
          <ProductItem 
          title="Moringa Pair"
          href="https://github.com/mit-bhalodi/Resume-Builder"
          src=""
          description=""
          />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        </menuItem>
        <menuItem>
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink>LinkedIn</HoveredLink>
          <HoveredLink>Github</HoveredLink>
          <HoveredLink>Email</HoveredLink>
        </div>
        </menuItem>
      </menu>
    </div>
  )

}

export default NavBarLive;

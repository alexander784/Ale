import { ProductItem } from "./ui/NavBarMenu";
import { HoveredLink } from "./ui/NavBarMenu";


export function NavBarLive() {
  return (
    <div className="relative w-full flex items-center justify-start">
      <Navbar className="top-2 md:top-4 border rounded-full mx-4 md:mx-auto border-black/[0.2] dark:border-white/[0.2]"/>
    </div>
  );
}

function Navbar({}) {
  return (
    <div className={("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 boder border-red", className)}>
      <menu>
        <p className=" text-black dark:text-black text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">Alexander Nyaga</p>
        <p classNam=" text-black dark:text-black text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">MB</p>
        <menuItem>
        <div>
          <HoveredLink>Experiences</HoveredLink>
        </div>
        </menuItem>
        <menuItem>
        <div className="">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        </menuItem>
        <menuItem>
        <div>

        </div>

        </menuItem>

      </menu>

    </div>
  )

}

export default NavBarLive;

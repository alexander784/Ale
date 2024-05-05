


export function NavBarLive() {
  return (
    <div className="">
      <Navbar />

    </div>
  );
}

function Navbar({}) {
  return (
    <div>
      <menu>
        <p className=" text-black dark:text-black text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">Alexander Nyaga</p>
        <p classNam=" text-black dark:text-black text-left sm:text-sm md:text-2xl flex-1 hidden md:flex">MB</p>
        <menuItem>
        <div>
          {/* <HoveredLink>Experiences</HoveredLink> */}
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

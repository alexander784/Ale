import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-neutral-800 shadow-md">
      <div className="flex items-center">
        <span className="text-xl font-bold text-white ml-2">Lexa</span>
      </div>

      <nav className="flex space-x-6">
        {/* <Link to="projects" smooth duration={500} offset={-70} className="cursor-pointer text-white hover:text-black transition-colors">
          Projects
        </Link> */}
        <Link to="blogs" smooth duration={500} offset={-70} className="cursor-pointer text-white hover:text-black transition-colors">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

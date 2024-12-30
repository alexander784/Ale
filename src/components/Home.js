import { Background } from "./Background";
import Dashboard from "./Dashboard";
// import NavBarLive from "./NavBarLive";
import Navbar from "./NavBar";


const Home = () => {
  return (
    <div className="home-screen bg-white dark:bg-gray-700 w-full h-screen">
        <Navbar />
        {/* <Background /> */}
        <Dashboard />
    </div>
  )
}

export default Home;
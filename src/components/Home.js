import { Background } from "./Background";
import Dashboard from "./Dashboard";
import NavBarLive from "./NavBarLive";

const Home = () => {
  return (
    <div className="home-screen bg-white dark:bg-gray-700 w-full h-screen">
        <NavBarLive />
        {/* <Background /> */}
        <Dashboard />
    </div>
  )
}

export default Home;
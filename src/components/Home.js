import { Background } from "./Background";
import Dashboard from "./Dashboard";
import NavBarLive from "./NavBarLive";

const Home = () => {
  return (
    <div>
        <NavBarLive />
        {/* <Background /> */}
        <Dashboard />
    </div>
  )
}

export default Home;
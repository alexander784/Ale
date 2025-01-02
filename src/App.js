import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/blog' element={<Blog />}/>
    </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './pages/About';
import Hooks from './pages/Hooks';
function App() {
  return (
   <>
     <Router>
      <div>
        <nav>   
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/hooks" element={<Hooks/>} />
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;

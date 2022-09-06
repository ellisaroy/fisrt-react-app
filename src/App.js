import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Header from './components/shared/Header/Header';
import Search from './components/Search';
import About from './pages/About';
import Methods from './pages/Methods';
import Hooks from './pages/Hooks';
function App() {
  return (
   <>
     <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/methods" element={<Methods/>} />
          <Route path="/hooks" element={<Hooks/>} />
        </Routes>
      </div>
    </Router>
   </>
  );
}

export default App;

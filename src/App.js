import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './components/Routes';
import Header from './components/shared/Header/Header';
function App() {
  return (
   <>
     <Router>
      <div>
        <Header/>
        <Routing />
      </div>
    </Router>
   </>
  );
}
export default App;

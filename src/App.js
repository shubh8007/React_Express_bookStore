import logo from './logo.svg';
import './App.css';
import {Navigate,Route,Routes} from 'react-router-dom'

import Bookform from './components/Bookform1';
import Booktable from './components/Booktable1';


function App() {
  return (
    <div className="App">
      <Routes>
     <Route path="/" element={<Navigate replace to="/table"></Navigate>}></Route>
     <Route path="/table" element={<Booktable/>}></Route>
    <Route path="/bookForm" element={<Bookform/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App; 

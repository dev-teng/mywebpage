import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Navbar from "./Navbar";
import Contact from "./Contact";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />}/>
            <Route path="contact" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App

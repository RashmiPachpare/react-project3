import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Bollywood from './Components/Bollywood';
import Technology from './Components/Technology';
import Hollywood from './Components/Hollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import "./style.css"
import ContextAPI from './Components/ContextAPI';
import DetailDescription from './Components/DetailDescription';

function App() {
  return (
    <>
   <div className="comps">
    
    <ContextAPI>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bollywood" element={<Bollywood/>}/>
        <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Hollywood" element={<Hollywood/>}/>
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Food" element={<Food/>}/>
        <Route path="/detaildescription/:id" element={<DetailDescription/>}/>
       </Routes>
      </BrowserRouter>
      </ContextAPI>
    
   </div>
    </>
  );
}

export default App;

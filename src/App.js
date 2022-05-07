import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
// components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

export default function App() {
  const [ darkMode, setDarkMode ] = useState(true);
  return (
    <div className={darkMode ? "app" : "app light_mode"}>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home darkmode={darkMode} setDarkmode={setDarkMode}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
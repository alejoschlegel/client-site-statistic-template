import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
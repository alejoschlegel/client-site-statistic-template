import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Nav from './components/Nav/Nav';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <Nav/>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< div />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
import {Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"

import Mugiwaras from "./pages/Home";

import "./main.css";




function App() {
  return (
    <div>
      <div className="App">
        {<Navbar />}
        <Routes>
          <Route path="/" element={<Mugiwaras />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

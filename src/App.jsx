import {Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home";

import "./main.css";
import PageNotFound from "./pages/PageNotFound";




function App() {
  return (
    <div>
      <div className="App">
        {<Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {<Footer />}
      </div>
    </div>
  )
}

export default App;

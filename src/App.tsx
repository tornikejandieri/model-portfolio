import React from 'react';
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import About from "./components/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

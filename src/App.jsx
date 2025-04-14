import { Routes, Route } from 'react-router-dom';
import React from "react";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import './App.css';
// App.js
import './icons'; // this registers icons globally


const App = () => {
  return (
    <>
      <Nav/>
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

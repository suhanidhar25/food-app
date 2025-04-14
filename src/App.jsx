import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Menu from "./pages/menu";
import Login from "./pages/login";
import Signup from "./pages/signup";
import "./App.css";
import "./icons";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

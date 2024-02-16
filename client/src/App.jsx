import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { NavbarWithMegaMenu } from './components/Navbar';
const App = () => {
  

  return (
   
    <div className="w-screen  min-h-screen  bg-blue-gray-500 flex flex-col font-inter">
      
        <NavbarWithMegaMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </div>
   
  );
};

export default App;
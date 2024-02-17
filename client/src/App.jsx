import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Hero from "./pages/Home/Hero";
import Footer from "./components/Footer";
// import { NavbarWithMegaMenu } from './components/Nav';
import Nav from "./components/common/Nav";
const App = () => {
  

  return (
   
    <div className=" min-h-screen   bg-gray-300 flex flex-col font-inter">
      
        {/* <NavbarWithMegaMenu /> */}
        <Nav/>
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
   
  );
};

export default App;
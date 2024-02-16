import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { NavbarWithMegaMenu } from './components/Navbar';
const App = () => {
  

  return (
   
    
      <BrowserRouter>
        <NavbarWithMegaMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
   
  );
};

export default App;
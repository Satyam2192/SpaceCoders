import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
const App = () => {
  

  return (
   
    <div className="w-screen  min-h-screen  bg-blue-gray-500 flex flex-col font-inter">
      
        {/* <NavbarWithMegaMenu /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/blog" element={<Blog />}/> */}

          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <Footer />
      </div>
   
  );
};

export default App;
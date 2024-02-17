import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home/Home";
import Nav from "./components/common/Nav";
const App = () => {
  

  return (
   
    <div className="  min-h-screen   bg-gray-300 flex  flex-col font-inter">
      
        <Nav />
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
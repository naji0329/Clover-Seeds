import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MyLand from "./pages/MyLand";
import MyNFT from "./pages/MyNFT";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-nft" element={<MyNFT />} />
        <Route path="/my-land" element={<MyLand />} />
      </Routes>
    </div>
  );
}

export default App;

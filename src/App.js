import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MyLand from "./pages/MyLand";
import MyNFT from "./pages/MyNFT";
import PreSaleMint from "./pages/PreSaleMint";
import VipMint from "./pages/VipMint";
import Whitepaper from "./pages/Whitepaper";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-nft" element={<MyNFT />} />
        <Route path="/my-land" element={<MyLand />} />
        <Route path="/vip-mint" element={<VipMint />} />
        <Route path="/presale-mint" element={<PreSaleMint />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </div>
  );
}

export default App;

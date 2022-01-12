import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Routes } from "react-router-dom";
import Header from "./components/Header";

import Staking from "./components/Staking";
import Mint from "./components/Mint";

function App(props) {
  // const dispatch = useDispatch()

  useEffect(async () => {}, []);

  return (
    <div>
      <Header />
     
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import VendingMachine from './VendingMachine'
import Soda from './Soda'
import Snacks from './Snacks'
import Sardines from './Sardines'
import NavBar from "./NavBar";

/**
*/

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/snacks" element={<Snacks/>} />
      <Route path="/soda" element={<Soda/>} />
      <Route path="/sardines" element={<Sardines/>} />
      <Route path="/" element={<VendingMachine />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;

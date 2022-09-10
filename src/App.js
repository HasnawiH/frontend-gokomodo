import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import component
import Home from "./pages/index";
import Detail from "./pages/detail";
import Pokebag from "./pages/pokebag";



const App = () => {
  return (
    <Router >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id/detail" element={<Detail />} />
        <Route path="/list-pokebag" element={<Pokebag />} />
      </Routes>
    </Router>
  )
}

export default App


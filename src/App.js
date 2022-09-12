import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import component
import Home from "./pages/index";
import Detail from "./pages/detail";

const App = () => {
  return (
    <Router >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id/detail" element={<Detail />} />
      </Routes>
    </Router>
  )
}

export default App


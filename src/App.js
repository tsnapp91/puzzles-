import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import TicTacToe from "./Pages/TicTacToe";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Snappy Puzzles</h1>
        <Link to="/">Home</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;

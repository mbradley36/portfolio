import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Portfolio />
    </Router>
  );
}

export default App;

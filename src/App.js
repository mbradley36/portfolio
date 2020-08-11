import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="max-width">
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;

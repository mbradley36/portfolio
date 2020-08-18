import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Portfolio />
    </Router>
  );
}

export default App;

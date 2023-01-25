import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects"

// import Home from "./pages/Home";
import Navigation from "./components/Nav";

function App() {
  return (
<div className="App">
      <Router>
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard /> } /> */}
              <Route path="/projects" element={<Projects />} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;

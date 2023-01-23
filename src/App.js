import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
import Navigation from "./components/Nav";

function App() {
  return (
<div className="App">
      <Router>
            <Navigation />
            <Routes>
              {/* <Route exact path="/" element={<Home />} /> */}
              {/* <Route path="/dashboard" element={<Dashboard /> } /> */}
              {/* <Route path="/shop" element={<Shop />} /> */}
            </Routes>
      </Router>
    </div>
  );
}

export default App;

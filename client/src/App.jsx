import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ChatAssistant from "./pages/ChatAssistant";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeAnalyzer />} />
          <Route path="/assistant" element={<ChatAssistant />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </Router>
);
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Website from "./pages/Website";
import Tools from "./pages/Tools";


function App() {
  return (
    <Router> {/* ✅ Only one Router here */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/websites" element={<Website />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;

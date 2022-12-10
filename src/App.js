import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./dashboard/Dashboard";
import Landing from "./landing-page/Landing";

function App() {
  const isLogged = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={isLogged ? <Dashboard /> : <Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/SideBar";
import StrategyDetailPage from "./pages/StrategyDetailPage";
import data from "./Components/data";

const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Sidebar data={data} />
        <div className="main-content">
          <Routes>
            {data.map((item) => (
              <Route
                key={item.id}
                path={`/${item.id}`}
                element={<StrategyDetailPage item={item} />}
              />
            ))}
            <Route
              path="/"
              element={<div>Select a strategy from the sidebar.</div>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

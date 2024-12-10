import React from "react";
import { Link } from "react-router-dom";
import "./../global.css";
const Sidebar = ({ data }) => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Strategies</h3>
      <ul className="sidebar-list">
        {data.map((item) => (
          <li key={item.id} className="sidebar-item">
            <Link to={`/${item.id}`} className="sidebar-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

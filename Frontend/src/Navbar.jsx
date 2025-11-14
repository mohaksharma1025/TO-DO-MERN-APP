import './STYLE/Navbar.css';

import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TO DO APP</h1>
      <ul className="nav-links">
        <li><Link to="/list">List</Link></li>
        <li><Link to="/add">Add Task</Link></li>
      </ul>
    </nav>
  );
}

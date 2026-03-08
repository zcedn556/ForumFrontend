import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import ThemeToggler from "../components/ThemeToggler";
import "../css/Navbar.css";

export default function Navbar() {
  const { token } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link className="logo-link" to="/">
        <div className="logo-container">
          <img className="logo" src="/logo.svg"/>
          <span>Chatter</span>
        </div>
      </Link>

      <input className="search-bar" placeholder="Search in Chatter"/>

      <div className="navbar-buttons">
        {token ? (
          <Link to="profile">
            <button className="navbar-button">Profile</button>
          </Link>
        ) : (
          <Link to="auth">
            <button className="navbar-button">Login</button>
          </Link>
        )}
        <span><ThemeToggler /></span>
      </div>
    </div>
  );
}
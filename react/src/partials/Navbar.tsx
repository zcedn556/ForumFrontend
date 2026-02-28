import { Link } from "react-router-dom"
import "../css/Navbar.css"
import ThemeToggler from "../components/ThemeToggler"

export default function Navbar() {
    return(
        <div className="navbar">
            <Link className="auth-link" to="/">
                <div className="logo-container">
                    <img className="logo" src="/logo.svg"/>
                    <span>Chatter</span>
                </div>
            </Link>

            <input className="search-bar" placeholder="Search in Chatter"/>

            <div className="navbar-buttons">
                <Link to="auth">
                    <button className="navbar-button">Login</button>
                </Link>
                <span><ThemeToggler /></span>
            </div>
        </div>
    )
}
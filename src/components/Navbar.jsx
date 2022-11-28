import React from "react"
import Logo from "../design/one_piece_logo.png"
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
        <nav className="nav">
            <NavLink to="/"><img src={Logo} alt="Logo" className="nav__logo" /></NavLink>
            <div className="nav__links">
                <NavLink to="/" className={({ isActive }) =>
                isActive ? "nav__links--active" : "nav__links--inactive"}>Acceuil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                isActive ? "nav__links--active" : "nav__links--inactive"}>À propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar
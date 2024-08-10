import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'
import logo from '../../assets/gph_logo.png'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to="/" >
                <img onClick={() => { setMenuOpen(false) }}
                    src={logo} className='gph-logo' >
                </img>
            </Link>
            <div className='menu' onClick={() => { setMenuOpen(!menuOpen) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li onClick={() => { setMenuOpen(!menuOpen) }} >
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }} >
                    <NavLink to="/services">SERVICES</NavLink>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }} >
                    <NavLink to="/about">ABOUT US</NavLink>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }} >
                    <NavLink to="/contact">CONTACT US</NavLink>
                </li>
                <li onClick={() => { setMenuOpen(!menuOpen) }} >
                    <NavLink to="/gallary">GALLERY</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar

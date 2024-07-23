import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import './NavBar.css'
import logo from '../../assets/gph_logo.png'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <Link to="/"><img src={logo} className='gph-logo'/></Link>
            <div className='menu' onClick={()=> {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open":""}>
                <li >
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li >
                    <NavLink to="/services">SERVICES</NavLink>
                </li>
                <li >
                    <NavLink to="/about">ABOUT US</NavLink>
                </li>
                <li >
                    <NavLink to="/contact">CONTACT US</NavLink>
                </li>
                <li >
                    <NavLink to="/gallary">GALLERY</NavLink>
                </li>
             </ul>
        </nav>
    )
}

export default NavBar

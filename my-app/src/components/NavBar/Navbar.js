import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import './NavBar.css'
import light_mode from '../../assets/DayTheme.png'
import dark_mode from '../../assets/NightTheme.png'
import search_item_light from '../../assets/SearchBar.png'
import search_item_black from '../../assets/SearchBarBlack.png'
import logo from '../../assets/gph_logo.png'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            {/* <h1>NavBar</h1> */}
            <Link to="/"><img src={logo} className='logo'/></Link>
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
        // <div >
        // <nav className='navbar'>
        //     <Link to="/">HOME</Link>
        //     <img rc={logo} alt='' className='logo'></img>
        //     <ul>
        //         <li>
        //             <Link to="/services">SERVICES</Link>
        //         </li>
        //         <li>
        //             <Link to="/about">ABOUT US</Link>
        //         </li>
        //         <li>
        //             <Link to="/contact">CONTACT US</Link>
        //         </li>
        //         <li>
        //             <Link to="/gallary">GALLARY</Link>
        //         </li>
        //     </ul>
        // </nav>
        // </div>
    )
}

export default NavBar


// <ul>
// <li onClick={()=>{console.log("Clicked on Home")}}>Home</li>
// <li>Products</li>
// <li>Features</li>
// <li>About</li>
// </ul>
// {/* <div className='search-box'>
// <input type='text' placeholder='search'/>
// <img src={search_item_light} alt=""/>
// </div> */}
// <img src={light_mode} alt='' className='toggle-icon'></img>
// <img src={logo} alt='' className='logo' />
 
import React from 'react'
// import {Link, useNavigate} from "react-router-dom"
import './Footer.css'
import instagram from  '../../assets/instagram4.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div >
                <a href="https://www.instagram.com/globalpethospital" target="_blank"><img src={instagram} className='logo'/></a>
                
            </div>
            <p className="text">Copyright © 2023 Global Pet Hospital - All Rights Reserved.</p>
        </div>
    )
}

export default Footer

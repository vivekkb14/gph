import React from 'react'
import './Footer.css'
import instagram from '../../assets/Common/instagram.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div >
                <a href="https://www.instagram.com/globalpethospital" target="_blank"><img src={instagram} className='logo' /></a>
            </div>
            <p className="text">Copyright © 2023 Global Pet Hospital - All Rights Reserved.</p>
        </div>
    )
}

export default Footer

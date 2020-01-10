import React from 'react'
import {Link } from 'react-router-dom'
import GUS from "../assets/gus-transparent.png"

const Footer = () =>{
    return(
        <div>
            <div className="footer-main-container">
                <div className="footer-info">
                    <p className="footer-label-1">&copy; Gus Dean's 2019</p>
                    <a className="footer-label-2" href="https://goo.gl/maps/Mab14bzqnHvixkni6" target="_blank" rel="noopener noreferrer"><p >4061 Silvestri LN. Las Vegas NV, 89120</p></a>
                    <a style={{textDecoration:'none', color: 'white'}} href="tel:702-749-6721"><p className="footer-label">702-749-6721</p></a>
                </div>
                <div className="footer-links">
                    <Link className="f-link" style={{textDecoration: 'none'}} to="/"><p className="footer-link-text">Home</p></Link>
                    <Link className="f-link"  style={{textDecoration: 'none'}} to="flavors"><p className="footer-link-text">Flavors</p></Link>
                    <Link className="f-link"  style={{textDecoration: 'none'}} to="contact-us"><p className="footer-link-text">Contact</p></Link>
                </div>
                <div className="footer-icons">
                    <a className="header-icon" href="https://www.facebook.com/gusdeansicecream/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-f"></i></a>
                    <a className="header-icon" href="https://www.instagram.com/gusdeans" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
                    <a className="header-icon"  href="https://www.yelp.com/biz/gus-deans-las-vegas" rel="noopener noreferrer" target="_blank"><i className="fa fa-yelp"></i></a>
                </div>
                <img alt="" className="footer-img"src={GUS}></img>
            </div>
        </div>
    )
}

export default Footer
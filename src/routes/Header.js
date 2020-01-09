import React from 'react'
import {Link} from 'react-router-dom'
import GUS from "../assets/gus-transparent.png"
import "font-awesome/css/font-awesome.min.css"


const Header  = (props) =>{
    return(
        <div>
            <div className="header-main-container">
                <img className="header-main-logo" src={GUS}></img>
                <div className="header-links">
                    <Link className="link" style={{textDecoration: 'none'}} to="/"><p className="header-link-text">Home</p></Link>
                    <Link className="link"  style={{textDecoration: 'none'}} to="flavors"><p className="header-link-text">Flavors</p></Link>
                    <Link className="link"  style={{textDecoration: 'none'}} to="contact-us"><p className="header-link-text">Contact Us</p></Link>
                </div>
                <div className="header-socials">
                <a className="header-icon" href="https://www.facebook.com/gusdeansicecream/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-f"></i></a>
                <a className="header-icon" href="https://www.instagram.com/gusdeans" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
                <a className="header-icon"  href="https://www.yelp.com/biz/gus-deans-las-vegas" rel="noopener noreferrer" target="_blank"><i className="fa fa-yelp"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header
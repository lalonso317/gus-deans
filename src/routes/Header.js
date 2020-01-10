import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import GUS from "../assets/gus-transparent.png"
import "font-awesome/css/font-awesome.min.css"
import { slide as Menu } from 'react-burger-menu'

const Header  = (props) =>{
    const[open , setOpen] = useState(false)

    function onClick() {
        setOpen(open === false)
    }
    return(
        <div>
            <div className="header-main-container">
                <div className="header-img-container">
                    <Link style={{textDecoration: 'none', width: '15%'}} id="home" className="menu-item" to="/"><img className="header-main-logo" src={GUS}></img></Link>
                </div>
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
            <Menu right isOpen={open}>
            <Link onClick={onClick} style={{textDecoration: 'none', color:'white'}} id="home" className="menu-item" to="/">Home</Link>
            <Link onClick={onClick}  style={{textDecoration: 'none', color:'white'}}  id="Linkbout" className="menu-item" to="flavors">Flavors</Link>
            <Link onClick={onClick}  style={{textDecoration: 'none', color:'white'}}  id="contact" className="menu-item" to="contact-us">Contact</Link>
            <div className="burger-socials">
                <a className="header-icon" href="https://www.facebook.com/gusdeansicecream/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-f"></i></a>
                <a className="header-icon" href="https://www.instagram.com/gusdeans" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram"></i></a>
                <a className="header-icon"  href="https://www.yelp.com/biz/gus-deans-las-vegas" rel="noopener noreferrer" target="_blank"><i className="fa fa-yelp"></i></a>
            </div>
            </Menu>
        </div>
    )
}

export default Header
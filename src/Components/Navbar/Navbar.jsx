import React from "react";
import { FaBars, FaFacebook, FaTimes } from "react-icons/fa";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {

    const[nav,setNavbar] = React.useState(false);
    const navbarToggle =  () => setNavbar(!nav);

    return(
        <div className="navbar">
            <div className="container">
                <div className="empty">
                </div>

                <ul className={nav ? 'navbarMenu active' : 'navbarMenu'}>
                    <li><a href ="/"><Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={50} duration={500}>About</Link></a></li>
                    <li><a href ="/"><Link activeClass="active" to="interests" spy={true} smooth={true} offset={50} duration={500}>Interests</Link></a></li>
                    <li><a href ="/"><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></a></li>
                    <li><a href ="/"><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></a></li>
                    <li><a href ="/"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></a></li>
                </ul>
                <div className="navbarButton" onClick={navbarToggle}>
                {nav ? (<FaTimes />) : (<FaBars />)}
                </div>
            </div>
        </div>

    )
}

export default Navbar
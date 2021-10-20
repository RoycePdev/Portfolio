import React, { useEffect, useState } from 'react'
import "../stylesheets/navbar.css"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { ImFire } from 'react-icons/im'



export const Navbar = (props) => {

  const [show, setShow] = useState(false)

  const controlNavbar = () => {
    if (window.scrollY > 1) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
    window.removeEventListener('scroll', controlNavbar)
    }
  },[])
 
  //color coming in from app.js
  const goat = props.fc

  return (
    <div className= {`navbar-full-container ${show && 'flex-display'}`}>        
        <nav className="navbar">
          <div className="logo"><a className="logo" href="#home">MyPortfolio</a> </div>
          <ul className="nav-item-container">
            <li className="nav-item home"><a className="nav-link" href="#home" >Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#project" >Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#services" >Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
        {/* <div className="fade"></div> */}
    </div>
  )
}


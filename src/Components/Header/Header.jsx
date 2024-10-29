import React from 'react'
import './Header.css'
import logo from '../../Assets/imgs/logo (1).jpeg'
import { Link } from 'react-router-dom'
export default function Header() {

    const handleMenuBtnClick = (e) => {
        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");
        const menuBtnIcon = menuBtn.querySelector("i");
    
        navLinks.classList.toggle("open");
    
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    
      }
    
      const handleNavlinkClick = (e) => {
        const menuBtn = document.getElementById("menu-btn");
        const navLinks = document.getElementById("nav-links");
        const menuBtnIcon = menuBtn.querySelector("i");
        // navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
        // });
      }
  return (
    <header>
        <nav>
          <div className="nav__header">
            <div className="nav_logo">
              <a href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn" onClick={handleMenuBtnClick}>
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links" onClick={handleNavlinkClick}>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li>
            <Link to="/pay-bills">Pay Bills</Link>
              </li>
            {/* <li><a href="#trackatransfer">Track a transfer</a></li>
            <li><a href="#paybills">Pay bills</a></li>
            <li><a href="#contact">Top up</a></li> */}
            <li className="nav__links__btn">
              <Link to='/register' className="btn">Sign Up</Link>
              {/* <a className="btn">Sign Up</a> */}
            </li>
            <li className="nav__links__btn">
            <Link to='/login' className="btn">Sign In</Link>
              {/* <a className="btn">Sign In</a> */}
            </li>
          </ul>
          <div className="nav__btns">
            {/* <a className="btn btn__primary">Sign Up</a> */}
            <Link to='/register' className="btn btn__primary">Sign Up</Link>
            {/* <a className="btn" style={{background:'#9d0208ff'}}>Sign In</a> */}
            <Link to='/login' className="btn" style={{background:'#9d0208ff'}}>Sign In</Link>
          </div>
        </nav>
        <div className="section__container header__container" id="home">
          <div className="header__image">
            <img src="https://d27735ao2xxhhe.cloudfront.net/blog/pro/the-challenges-and-opportunities-of-cross-border-remittances-to-the-gambia-in-the-digital-age-1000x70064a6bf5a4509a1688649562.png" alt="header" />
          </div>
          <div className="header__content mx-1 text-center text-sm-start">
            <h1>Send and receive money in minutes with Payora</h1>
            <p>
              Discover Payora money transfer options in Haiti
              Register now to get a better exchange rate and $0 fee on your first online transfer
            </p>
            <button type="button" className="btn-crazy btn btn-lg mb-3 mb-sm-0" style={{background:'#9d0208ff'}}>
              Send money now
            </button>
          </div>
        </div>
      </header>
  )
}

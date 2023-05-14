// General importations for React functionality (including states)
import React, { useState } from "react";
// Importations for React icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// Local instantiation of site logo
import logo from "../../assets/logo.svg";
// Local instantiation of custom styles
import "./navbar.css";

// Inner component for menu elements
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatgpt3">What is GPT-3?</a></p>
    <p><a href="#possibility">OpenAI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

// Outer component for navbar
const Navbar = () => {
  // Create state functions for expanding/collapsing the menu
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      {/* Container for navbar logo & page links */}
      <div className="gpt3__navbar-links">
        {/* Logo of navbar */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Page links of navbar */}
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      {/* Container for navbar sign-in/sign-up links */}
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      {/* Container for navbar menu links */}
      <div className="gpt3__navbar-menu">
        {/* Collapsed menu in navbar header */}
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} /> 
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {/* Expanded menu in navbar header */}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
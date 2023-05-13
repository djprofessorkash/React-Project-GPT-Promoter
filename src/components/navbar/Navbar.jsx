import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* Logo of Nav-Bar */}
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Page Links of Nav-Bar */}
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt3">What is GPT-3?</a></p>
          <p><a href="#possibility">OpenAI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
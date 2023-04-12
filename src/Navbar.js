import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";
import logo from "./images/logo.svg";
const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });

 

  const handleClick = (page) => {
    setPage(sublinks.find((link) => link.page === page));
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };


  return (
    <nav className="nav" onMouseLeave={handleMouseLeave}>
      <button className="back_to_portfolio">
        <a href="https://main--startling-bienenstitch-220eca.netlify.app">WRÓĆ DO PORTFOLIO</a>
      </button>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, index) => {
            return (
              <li key={index}>
                <button
                  className="link-btn"
                  onMouseOver={() => handleClick(link.page)}
                >
                  {link.page}
                </button>
                
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
      {isOpen && (
        <div className="nav-modal">
          <ul className="nav-modal-ul">
            {page.links.map((link, index) => {
              return (
                <li key={index} className="nav-modal-li">
                  <a href={link.url} className="nav-modal-a">
                    {link.icon}{" "}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

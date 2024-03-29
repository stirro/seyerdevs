import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Typed from 'typed.js';
import Popup from "../components/Popup"; 

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false); // Nuevo estado

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
/* eslint-disable no-unused-vars */
  const Logo = useRef(null);
  const [typedEffectExecuted, setTypedEffectExecuted] = useState(false);

  useEffect(() => {
    if (!typedEffectExecuted) {
      const typed = new Typed(Logo.current, {
        strings: ['SEYER_', 'DEVS_', 'SEYER DEVS_'],
        typeSpeed: 80,
        backSpeed: 80,
        fadeOut: false,
        showCursor: false
      });
      setTypedEffectExecuted(true);
    }
  }, [typedEffectExecuted]);

  // Nuevo manejador de clic para abrir el popup
  const handleConnectButtonClick = () => {
    setPopupOpen(true);
  }
/* eslint-enable no-unused-vars */
return (
<>
  <Navbar expand="md" className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home" className="Logo" ref={Logo}></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skl" className={ activeLink === 'about us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skl')}>Skills</Nav.Link>
          <Nav.Link href="#project" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Desarrollos</Nav.Link>
        </Nav> 
        <span className='navbar-text'>
          <button className="vvd" onClick={handleConnectButtonClick}>
            <span>Let's Connect</span>
          </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
</>
  );
}
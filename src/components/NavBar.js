import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50) 
        {
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

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about us" className={ activeLink === 'about us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about us')}>¿Quines Somos?</Nav.Link>
            <Nav.Link href="projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Devsarrollos</Nav.Link>
            <Nav.Link href="tecnologias" className={ activeLink === 'tecnologias' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tecnologias')}>Tecnoligias</Nav.Link>
          </Nav>
        <Navbar.Brand href="#home">SeyerDEVS</Navbar.Brand>
          <span className="navbar-text">
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
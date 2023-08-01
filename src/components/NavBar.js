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
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
      <Navbar.Brand href="#home" className=".Logo">
        <h1>SEYER DEVS_</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon"></span>
       </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
           <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about us" className={ activeLink === 'about us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about us')}>¿Quines Somos?</Nav.Link>
            <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>DEVSarrollos</Nav.Link>
            <Nav.Link href="#tecnologias" className={ activeLink === 'tecnologias' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tecnologias')}>Tecnoligias</Nav.Link>
        </Nav> 
          <span className='navbar-text'>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect</span>
            </button>
          </span>       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
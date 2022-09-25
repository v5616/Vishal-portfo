import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import vishal from "../assets/img/vishal.png"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="/">
          <img src={vishal} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span class="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Link</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vishal-rajput-9b98501ba/" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/vishal_singh_kharyal_/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../assets/Logo.png";
import './style/nav.css';

function NavScrollExample() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = document.getElementById('navigasi').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close navbar on mobile after clicking
      const navbarToggle = document.querySelector('.navbar-collapse');
      if (navbarToggle && navbarToggle.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    }
  };

  return (
    <Navbar bg="white" expand="lg" variant="light" className="fixed-top shadow-sm" id='navigasi'>
      <Container>
        <Navbar.Brand 
          href="#home" 
          className="fw-bold fs-3 d-flex align-items-center"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img src={Logo} alt="logo" width="35px" className='me-3' />
          PT FRIMS SUKSES BERSAMA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link 
              href="#header" 
              className="me-2 mb-lg-0 mb-2" 
              onClick={(e) => handleNavClick(e, 'header')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              className="me-2 mb-lg-0 mb-2"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#service" 
              className="me-2 mb-lg-0 mb-2"
              onClick={(e) => handleNavClick(e, 'service')}
            >
              Service
            </Nav.Link>
            <Nav.Link 
              href="#portofolio" 
              className="me-3 mb-lg-0 mb-2"
              onClick={(e) => handleNavClick(e, 'portofolio')}
            >
              Portofolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
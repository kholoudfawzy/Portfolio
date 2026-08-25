import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const navItems = [
  { key: 'home', label: 'Home', href: '#home' },
  { key: 'skills', label: 'Skills', href: '#skills' },
  { key: 'projects', label: 'My Journey', href: '#projects' },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/kholoud-omran-098198197', icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://github.com/kholoudfawzy', icon: FaGithub, label: 'GitHub' },
];

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = () => {
    const projectsSection = document.getElementById('projects');
    const contactTab = document.getElementById('projects-tabs-tab-contactTab');

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => {
      if (contactTab) contactTab.click();
    }, 500);
  };

  return (
    <Navbar expand="lg" className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home" className="logo text-white" aria-label="Kholoud home page">
          Kh◉L◉uD.
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" aria-label="Toggle navigation" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links-container ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.key}
                href={item.href}
                className={activeLink === item.key ? 'active navbar-link' : 'navbar-link'}
                onClick={() => setActiveLink(item.key)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-text">
            <div className="social-icon" aria-label="Social media links">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={18} className="social-icon-item" />
                </a>
              ))}
            </div>

            <button type="button" className="nav-btn" onClick={scrollToContact}>
              <span className="nav-btn-span">Let&apos;s Connect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


//   Old Code  ///
// import { useState , useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { FaGithub , FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";


// function NavBar() {
//   const [activeLink , setActiveLink] = useState("home");
//   const [scrolled , setScrolled] = useState(false)
    
//     useEffect(() => {
//         const onScroll = () => {
//             if (window.scrollY > 50) {
//                 setScrolled(true)
//             } else {
//                 setScrolled(false)
//             }
//         }

//         window.addEventListener("scroll" , onScroll);

//         return () => window.removeEventListener("scroll" , onScroll);
//     } , [])

//     const onUpdateActiveLink = (value) => {
//         setActiveLink(value);
//     }

//      const scrollToContact = () => {
//         document.getElementById("projects").scrollIntoView({ behavior: "smooth" });

//         setTimeout(() => {
//             const contactTab = document.getElementById("projects-tabs-tab-third");
//             if (contactTab) contactTab.click();
//         }, 600);
//     };

//   return (
//     <Navbar expand="lg" className={`main-navbar ${scrolled ? "scrolled" : ""}`}> 
//       <Container>
//         <Navbar.Brand href="#home" className='logo text-white'>
//           Kh◉L◉uD.
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'>
//             <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="nav-links-container ms-auto">
//             <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
//             <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
//             <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>My Journey</Nav.Link>

//           </Nav>
//           <span className="navbar-text">
//             <div className='social-icon'>
//                <a href='https://www.linkedin.com/in/kholoud-omran-098198197' target="_blank" rel="noopener noreferrer">
//                   <FaLinkedinIn size={18} className='social-icon-item'/>
//                 </a>
//                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
//                   <FaFacebookF size={18} className='social-icon-item'/>
//                 </a>
//                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
//                   <FaInstagram size={18} className='social-icon-item'/>
//                 </a>
//                <a href='https://github.com/kholoudfawzy' target="_blank" rel="noopener noreferrer">
//                  <FaGithub size={18} className='social-icon-item'/>
//                 </a>
//             </div>
//             <button type="button" className='nav-btn' onClick={scrollToContact}>
//                 <span className='nav-btn-span'>Let's Connect</span>
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;


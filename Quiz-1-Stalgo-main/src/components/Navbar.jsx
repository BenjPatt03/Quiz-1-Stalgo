import React, { memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import { navLinks, companyInfo } from '../data/content';

/**
 * Navbar Component
 * 
 * A responsive navigation bar with active link highlighting.
 * Features sticky positioning and mobile-responsive hamburger menu.
 * 
 * @component
 * @example
 * ```jsx
 * import Navbar from './components/Navbar';
 * 
 * function App() {
 *   return <Navbar />;
 * }
 * ```
 */
const Navbar = memo(function Navbar() {
  const location = useLocation();

  const isActivePath = useCallback((path) => {
    return location.pathname === path;
  }, [location.pathname]);

  return (
    <BsNavbar 
      bg="black" 
      variant="dark" 
      expand="lg" 
      className="navbar" 
      sticky="top"
      role="navigation"
      aria-label="Main navigation"
    >
      <Container>
        <BsNavbar.Brand 
          as={Link} 
          to="/"
          aria-label={`${companyInfo.shortName} home`}
        >
          {companyInfo.shortName}
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle 
          aria-controls="basic-navbar-nav"
          aria-label="Toggle navigation menu"
        />
        
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.path}
                as={Link}
                to={link.path}
                active={isActivePath(link.path)}
                aria-current={isActivePath(link.path) ? 'page' : undefined}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;

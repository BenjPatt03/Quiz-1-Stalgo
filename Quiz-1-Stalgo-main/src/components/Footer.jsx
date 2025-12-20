import React, { memo, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { companyInfo, navLinks } from '../data/content';

/**
 * FooterColumn Component
 * 
 * Reusable footer column with heading and content.
 * 
 * @param {Object} props
 * @param {string} props.title - Column heading
 * @param {React.ReactNode} props.children - Column content
 */
const FooterColumn = memo(function FooterColumn({ title, children }) {
  return (
    <Col md={4} className="mb-4">
      <h5 className="fw-bold mb-3">{title}</h5>
      {children}
    </Col>
  );
});

FooterColumn.displayName = 'FooterColumn';

/**
 * Footer Component
 * 
 * Site footer with company info, navigation links, and business hours.
 * Includes copyright notice with dynamic year.
 * 
 * @component
 * @example
 * ```jsx
 * import Footer from './components/Footer';
 * 
 * function App() {
 *   return (
 *     <div>
 *       <main>{content}</main>
 *       <Footer />
 *     </div>
 *   );
 * }
 * ```
 */
const Footer = memo(function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <Row>
          <FooterColumn title={companyInfo.shortName}>
            <p>{companyInfo.tagline}</p>
            <p className="mb-1">
              <strong>Email:</strong>{' '}
              <a href={`mailto:${companyInfo.email}`} aria-label="Email us">
                {companyInfo.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href={`tel:${companyInfo.phone}`} aria-label="Call us">
                {companyInfo.phone}
              </a>
            </p>
          </FooterColumn>
          
          <FooterColumn title="Quick Links">
            <nav aria-label="Footer navigation">
              <ul className="list-unstyled">
                {navLinks.map((link) => (
                  <li key={link.path} className="mb-2">
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </FooterColumn>
          
          <FooterColumn title="Business Hours">
            <p className="mb-1">
              <strong>Monday - Friday:</strong> {companyInfo.businessHours.mondayToFriday}
            </p>
            <p className="mb-1">
              <strong>Saturday:</strong> {companyInfo.businessHours.saturday}
            </p>
            <p>
              <strong>Sunday:</strong> {companyInfo.businessHours.sunday}
            </p>
          </FooterColumn>
        </Row>
        
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;

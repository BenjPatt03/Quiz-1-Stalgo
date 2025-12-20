import React, { memo, useMemo } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { heroContent } from '../data/content';

/**
 * HeroSection Component
 * 
 * Full-width hero banner with background image, overlay, and call-to-action.
 * Responsive design with mobile-optimized text sizing.
 * 
 * @component
 * @example
 * ```jsx
 * import HeroSection from './components/HeroSection';
 * 
 * function Home({ company }) {
 *   return <HeroSection company={company} />;
 * }
 * ```
 */
const HeroSection = memo(function HeroSection({ company }) {
  const heroStyle = useMemo(() => ({
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/hero/hero-background.jpg)',
    backgroundColor: '#2c3e50',
    minHeight: '500px'
  }), []);

  return (
    <section 
      className="hero-section" 
      style={heroStyle}
      aria-label="Hero section"
    >
      <Container>
        <Row className="hero-content">
          <Col lg={8}>
            <h1 className="display-4 fw-bold mb-3">
              {heroContent.title}
            </h1>
            <p className="lead mb-4">
              {company?.tagline || heroContent.subtitle}
            </p>
            <Button 
              as={Link} 
              to={heroContent.ctaLink} 
              variant="primary" 
              size="lg"
              aria-label={`${heroContent.ctaText} - Navigate to contact page`}
            >
              {heroContent.ctaText}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;

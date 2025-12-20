import React, { memo, useCallback, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { benefits as staticBenefits } from '../data/content';

/**
 * BenefitCard Component
 * 
 * Individual benefit card with image, title, and description.
 * Includes error handling for missing images.
 * 
 * @param {Object} props
 * @param {Object} props.benefit - Benefit object with id, title, description, image
 */
const BenefitCard = memo(function BenefitCard({ benefit }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback((e) => {
    if (!imageError) {
      setImageError(true);
      e.target.src = `https://via.placeholder.com/400x250/34495e/ffffff?text=${encodeURIComponent(benefit.title)}`;
    }
  }, [imageError, benefit.title]);

  const handleImageLoad = useCallback(() => {
    setImageError(false);
  }, []);

  return (
    <Col md={4} className="mb-4">
      <Card 
        className="h-100 border-0 shadow"
        role="article"
        aria-labelledby={`benefit-title-${benefit.id}`}
      >
        <Card.Img 
          variant="top" 
          src={benefit.image} 
          alt={`${benefit.title} illustration`}
          className="benefit-image"
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="lazy"
        />
        <Card.Body>
          <Card.Title 
            id={`benefit-title-${benefit.id}`}
            className="fw-bold"
          >
            {benefit.title}
          </Card.Title>
          <Card.Text>{benefit.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
});

BenefitCard.displayName = 'BenefitCard';

/**
 * BenefitsSection Component
 * 
 * Displays product benefits with images in a responsive grid.
 * Images are lazy-loaded for performance optimization.
 * 
 * @component
 * @example
 * ```jsx
 * import BenefitsSection from './components/BenefitsSection';
 * 
 * function Home({ company }) {
 *   return <BenefitsSection company={company} />;
 * }
 * ```
 */
const BenefitsSection = memo(function BenefitsSection({ company }) {
  const benefitList = company && Array.isArray(company.benefits) && company.benefits.length > 0
    ? company.benefits
    : staticBenefits;

  return (
    <section 
      className="section-padding"
      aria-labelledby="benefits-heading"
    >
      <Container>
        <h2 id="benefits-heading" className="section-title">
          Product Benefits
        </h2>
        <Row>
          {benefitList.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </Row>
      </Container>
    </section>
  );
});

BenefitsSection.displayName = 'BenefitsSection';

export default BenefitsSection;

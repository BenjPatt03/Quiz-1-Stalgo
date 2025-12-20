import React, { memo } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { features as staticFeatures } from '../data/content';

const iconMap = {
  shield: '🛡️',
  truck: '🚚',
  tools: '🔧'
};

/**
 * FeatureCard Component
 * 
 * Individual feature card with icon, title, and description.
 * 
 * @param {Object} props
 * @param {Object} props.feature - Feature object with id, title, description, icon
 */
const FeatureCard = memo(function FeatureCard({ feature }) {
  return (
    <Col md={4} className="mb-4">
      <Card 
        className="feature-card h-100 border-0 shadow-sm"
        role="article"
        aria-labelledby={`feature-title-${feature.id}`}
      >
        <Card.Body className="text-center">
          <div 
            className="feature-icon" 
            role="img" 
            aria-label={`${feature.title} icon`}
          >
            {iconMap[feature.icon]}
          </div>
          <Card.Title 
            id={`feature-title-${feature.id}`}
            className="fw-bold"
          >
            {feature.title}
          </Card.Title>
          <Card.Text>{feature.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
});

FeatureCard.displayName = 'FeatureCard';

/**
 * FeaturesSection Component
 * 
 * Displays company features in a responsive grid layout.
 * Maximum 3 features for optimal user experience.
 * 
 * @component
 * @example
 * ```jsx
 * import FeaturesSection from './components/FeaturesSection';
 * 
 * function Home({ company }) {
 *   return <FeaturesSection company={company} />;
 * }
 * ```
 */
const FeaturesSection = memo(function FeaturesSection({ company }) {
  const featureList = company && Array.isArray(company.features) && company.features.length > 0
    ? company.features
    : staticFeatures;

  return (
    <section 
      className="section-padding bg-light"
      aria-labelledby="features-heading"
    >
      <Container>
        <h2 id="features-heading" className="section-title">
          Why Choose PhilPaint
        </h2>
        <Row>
          {featureList.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </Row>
      </Container>
    </section>
  );
});

FeaturesSection.displayName = 'FeaturesSection';

export default FeaturesSection;

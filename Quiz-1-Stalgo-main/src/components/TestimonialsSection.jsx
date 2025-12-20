import React, { memo, useMemo } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { testimonials as staticTestimonials } from '../data/content';

/**
 * RatingStars Component
 * 
 * Displays star rating with proper accessibility attributes.
 * 
 * @param {Object} props
 * @param {number} props.rating - Rating value (1-5)
 */
const RatingStars = memo(function RatingStars({ rating }) {
  const stars = useMemo(() => '⭐'.repeat(rating), [rating]);
  
  return (
    <div 
      className="rating-stars mb-3" 
      role="img" 
      aria-label={`${rating} out of 5 stars`}
    >
      {stars}
    </div>
  );
});

RatingStars.displayName = 'RatingStars';

/**
 * TestimonialCard Component
 * 
 * Individual testimonial card with rating, quote, and client info.
 * 
 * @param {Object} props
 * @param {Object} props.testimonial - Testimonial object with id, name, company/company_name, text, rating
 */
const TestimonialCard = memo(function TestimonialCard({ testimonial }) {
  return (
    <Col md={4} className="mb-4">
      <Card 
        className="testimonial-card shadow-sm border-0"
        role="article"
        aria-label={`Testimonial from ${testimonial.name}`}
      >
        <Card.Body>
          <RatingStars rating={testimonial.rating} />
          
          <blockquote className="mb-4">
            <Card.Text as="p" className="mb-0">
              "{testimonial.text}"
            </Card.Text>
          </blockquote>
          
          <div className="mt-auto">
            <Card.Subtitle className="mb-1 fw-bold">
              {testimonial.name}
            </Card.Subtitle>
            <Card.Text className="text-muted small">
              {testimonial.company || testimonial.company_name}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

/**
 * TestimonialsSection Component
 * 
 * Displays client testimonials in a responsive grid layout.
 * Each testimonial includes rating, quote, and client information.
 * 
 * @component
 * @example
 * ```jsx
 * import TestimonialsSection from './components/TestimonialsSection';
 * 
 * function Home({ company }) {
 *   return <TestimonialsSection company={company} />;
 * }
 * ```
 */
const TestimonialsSection = memo(function TestimonialsSection({ company }) {
  const testimonialList = company && Array.isArray(company.testimonials) && company.testimonials.length > 0
    ? company.testimonials
    : staticTestimonials;

  return (
    <section 
      className="section-padding bg-light-gray"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <h2 id="testimonials-heading" className="section-title">
          What Our Clients Say
        </h2>
        <Row>
          {testimonialList.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Row>
      </Container>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;

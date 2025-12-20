import React, { memo, useCallback, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { aboutContent } from '../data/content';

/**
 * ValueCard Component
 * 
 * Displays a single core value with title and description.
 */
const ValueCard = memo(function ValueCard({ value }) {
  return (
    <Col md={6} lg={3} className="mb-4">
      <Card 
        className="value-card text-center"
        role="article"
        aria-labelledby={`value-title-${value.id}`}
      >
        <Card.Body>
          <Card.Title 
            id={`value-title-${value.id}`}
            className="fw-bold"
          >
            {value.title}
          </Card.Title>
          <Card.Text className="small">{value.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
});

ValueCard.displayName = 'ValueCard';

/**
 * TeamMemberCard Component
 * 
 * Displays team member profile with image, name, position, and bio.
 * Includes image error handling with placeholder fallback.
 */
const TeamMemberCard = memo(function TeamMemberCard({ member }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = useCallback((e) => {
    if (!imageError) {
      setImageError(true);
      const firstName = encodeURIComponent(member.name.split(' ')[0]);
      e.target.src = `https://via.placeholder.com/200x200/2c3e50/ffffff?text=${firstName}`;
    }
  }, [imageError, member.name]);

  return (
    <Col md={4} className="mb-4">
      <Card 
        className="border-0 shadow-sm text-center"
        role="article"
        aria-labelledby={`member-name-${member.id}`}
      >
        <Card.Body>
          <img
            src={member.image}
            alt={`${member.name}, ${member.position}`}
            className="team-member-img mx-auto"
            onError={handleImageError}
            loading="lazy"
          />
          <Card.Title 
            id={`member-name-${member.id}`}
            className="fw-bold mb-1"
          >
            {member.name}
          </Card.Title>
          <Card.Subtitle className="mb-3 text-primary">
            {member.position}
          </Card.Subtitle>
          <Card.Text className="small">{member.bio}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
});

TeamMemberCard.displayName = 'TeamMemberCard';

/**
 * About Page Component
 * 
 * Complete about page with company story, mission/vision, values, and team.
 * Structured in semantic sections for accessibility and SEO.
 * 
 * @component
 * @example
 * ```jsx
 * import About from './pages/About';
 * 
 * <Route path="/about" element={<About />} />
 * ```
 */
const About = memo(function About() {
  return (
    <main role="main" className="about-page">
      <section className="section-padding" aria-labelledby="story-heading">
        <Container>
          <h1 id="story-heading" className="section-title">
            {aboutContent.story.title}
          </h1>
          <Row className="justify-content-center">
            <Col lg={10}>
              <p className="lead text-center">{aboutContent.story.content}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light" aria-labelledby="mission-vision-heading">
        <Container>
          <h2 className="visually-hidden" id="mission-vision-heading">
            Mission and Vision
          </h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold h3 mb-3">
                    {aboutContent.mission.title}
                  </Card.Title>
                  <Card.Text>{aboutContent.mission.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <Card.Title className="fw-bold h3 mb-3">
                    {aboutContent.vision.title}
                  </Card.Title>
                  <Card.Text>{aboutContent.vision.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding" aria-labelledby="values-heading">
        <Container>
          <h2 id="values-heading" className="section-title">
            Our Core Values
          </h2>
          <Row>
            {aboutContent.values.map((value) => (
              <ValueCard key={value.id} value={value} />
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light-gray" aria-labelledby="team-heading">
        <Container>
          <h2 id="team-heading" className="section-title">
            Leadership Team
          </h2>
          <Row>
            {aboutContent.team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
});

About.displayName = 'About';

export default About;

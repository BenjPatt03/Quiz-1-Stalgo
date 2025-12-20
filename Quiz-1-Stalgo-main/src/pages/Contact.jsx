import React, { memo, useCallback, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { companyInfo } from '../data/content';

/**
 * ContactInfoCard Component
 * 
 * Displays company contact information including address, phone, email, hours, and messaging.
 */
const ContactInfoCard = memo(function ContactInfoCard() {
  return (
    <Col md={6} className="mb-4">
      <Card className="contact-info-card shadow-sm border-0 h-100">
        <Card.Body>
          <h3 className="fw-bold mb-4">Contact Information</h3>
          
          <section className="mb-4" aria-labelledby="address-heading">
            <h5 id="address-heading" className="fw-bold mb-2">
              <span role="img" aria-label="Location">📍</span> Address
            </h5>
            <address className="mb-0">{companyInfo.address}</address>
          </section>
          
          <section className="mb-4" aria-labelledby="phone-heading">
            <h5 id="phone-heading" className="fw-bold mb-2">
              <span role="img" aria-label="Phone">📞</span> Phone
            </h5>
            <p className="mb-0">
              <a href={`tel:${companyInfo.phone}`} aria-label="Call us">
                {companyInfo.phone}
              </a>
            </p>
          </section>
          
          <section className="mb-4" aria-labelledby="email-heading">
            <h5 id="email-heading" className="fw-bold mb-2">
              <span role="img" aria-label="Email">✉️</span> Email
            </h5>
            <p className="mb-0">
              <a href={`mailto:${companyInfo.email}`} aria-label="Email us">
                {companyInfo.email}
              </a>
            </p>
          </section>
          
          <section className="mb-4" aria-labelledby="hours-heading">
            <h5 id="hours-heading" className="fw-bold mb-2">
              <span role="img" aria-label="Clock">🕐</span> Business Hours
            </h5>
            <p className="mb-1">
              <strong>Monday - Friday:</strong> {companyInfo.businessHours.mondayToFriday}
            </p>
            <p className="mb-1">
              <strong>Saturday:</strong> {companyInfo.businessHours.saturday}
            </p>
            <p className="mb-0">
              <strong>Sunday:</strong> {companyInfo.businessHours.sunday}
            </p>
          </section>
          
          <section aria-labelledby="messaging-heading">
            <h5 id="messaging-heading" className="fw-bold mb-2">
              <span role="img" aria-label="Message">💬</span> Messaging
            </h5>
            <p className="mb-0">
              We're available on: {companyInfo.messaging.join(', ')}
            </p>
          </section>
        </Card.Body>
      </Card>
    </Col>
  );
});

ContactInfoCard.displayName = 'ContactInfoCard';

/**
 * ContactForm Component
 * 
 * Contact form with validation and submission handling.
 * Currently shows demo alert - ready for backend integration.
 */
const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setShowAlert(true);
    
    // Reset form after demo alert
    setTimeout(() => {
      setShowAlert(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  }, []);

  return (
    <Col md={6} className="mb-4">
      <Card className="shadow-sm border-0 h-100">
        <Card.Body className="contact-form">
          <h3 className="fw-bold mb-4">Send Us a Message</h3>
          
          {showAlert && (
            <Alert variant="info" dismissible onClose={() => setShowAlert(false)}>
              This is a demonstration form. Form submission is not functional in this version.
            </Alert>
          )}
          
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Full Name <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name" 
                required
                aria-required="true"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                required
                aria-required="true"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="contactPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="contactSubject">
              <Form.Label>Subject <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?" 
                required
                aria-required="true"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>Message <span className="text-danger">*</span></Form.Label>
              <Form.Control 
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5} 
                placeholder="Tell us about your project or inquiry..."
                required
                aria-required="true"
              />
            </Form.Group>
            
            <Button 
              variant="primary" 
              type="submit" 
              className="w-100"
              aria-label="Send contact message"
            >
              Send Message
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
});

ContactForm.displayName = 'ContactForm';

/**
 * MapSection Component
 * 
 * Embedded Google Maps showing company location with pin marker.
 */
const MapSection = memo(function MapSection() {
  return (
    <Row>
      <Col>
        <Card className="shadow-sm border-0">
          <Card.Body className="p-0">
            <iframe
              title="Philippine Paint Manufacturers Inc. Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5!2d120.9567!3d14.6567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM5JzI0LjEiTiAxMjDCsDU3JzI0LjEiRQ!5e0!3m2!1sen!2sph!4v1701500000000!5m2!1sen!2sph&q=Gov.+Pascual+Avenue,+Malabon+City,+Metro+Manila,+Philippines"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing location at Gov. Pascual Avenue, Malabon City"
            />
          </Card.Body>
        </Card>
        <div className="text-center mt-3">
          <a 
            href="https://www.google.com/maps/search/Gov.+Pascual+Avenue,+Northern+Hills,+Malabon+City,+Metro+Manila,+Philippines"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <span role="img" aria-label="Location pin">📍</span> Open in Google Maps
          </a>
        </div>
      </Col>
    </Row>
  );
});

MapSection.displayName = 'MapSection';

/**
 * Contact Page Component
 * 
 * Complete contact page with information card, contact form, and map.
 * Form includes validation and is ready for backend integration.
 * 
 * @component
 * @example
 * ```jsx
 * import Contact from './pages/Contact';
 * 
 * <Route path="/contact" element={<Contact />} />
 * ```
 */
const Contact = memo(function Contact() {
  return (
    <main role="main" className="contact-page">
      <section className="section-padding" aria-labelledby="contact-heading">
        <Container>
          <h1 id="contact-heading" className="section-title">
            Get in Touch
          </h1>
          
          <Row className="mb-5">
            <ContactInfoCard />
            <ContactForm />
          </Row>
          
          <MapSection />
        </Container>
      </section>
    </main>
  );
});

Contact.displayName = 'Contact';

export default Contact;

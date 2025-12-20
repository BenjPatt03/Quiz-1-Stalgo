import React from 'react';
import { render, screen } from '@testing-library/react';
import TestimonialsSection from '../TestimonialsSection';

describe('TestimonialsSection Component', () => {
  test('renders section heading', () => {
    render(<TestimonialsSection />);
    const heading = screen.getByText(/What Our Clients Say/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders all testimonials', () => {
    render(<TestimonialsSection />);
    const testimonialCards = screen.getAllByRole('article');
    expect(testimonialCards.length).toBeGreaterThanOrEqual(3);
  });

  test('displays star ratings with accessibility', () => {
    render(<TestimonialsSection />);
    const ratings = screen.getAllByRole('img', { name: /5 out of 5 stars/i });
    expect(ratings.length).toBeGreaterThan(0);
  });

  test('renders testimonial quotes', () => {
    render(<TestimonialsSection />);
    const quotes = screen.getAllByText(/".*"/);
    expect(quotes.length).toBeGreaterThan(0);
  });

  test('renders client names and companies', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(/Engr. Roberto Santos/i)).toBeInTheDocument();
    expect(screen.getByText(/Santos Construction Corp./i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from '../HeroSection';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HeroSection Component', () => {
  test('renders hero title', () => {
    renderWithRouter(<HeroSection />);
    const titleElement = screen.getByText(/Industrial Paint Solutions Built for Durability/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders hero subtitle', () => {
    renderWithRouter(<HeroSection />);
    const subtitleElement = screen.getByText(/Serving contractors, dealers/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  test('renders call-to-action button', () => {
    renderWithRouter(<HeroSection />);
    const ctaButton = screen.getByRole('link', { name: /Get a Quote/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', '/contact');
  });

  test('has proper semantic HTML structure', () => {
    renderWithRouter(<HeroSection />);
    const section = screen.getByLabelText(/hero section/i);
    expect(section).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Footer Component', () => {
  test('renders company name and tagline', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/PhilPaint/i)).toBeInTheDocument();
    expect(screen.getByText(/Trusted Paint Solutions/i)).toBeInTheDocument();
  });

  test('renders contact information', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/info@philpaint.com/i)).toBeInTheDocument();
    expect(screen.getByText(/02-362-06/)).toBeInTheDocument();
  });

  test('renders business hours', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByText(/Monday - Friday/i)).toBeInTheDocument();
    expect(screen.getByText(/08:00 AM - 05:00 PM/i)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Footer />);
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toBeGreaterThan(0);
  });

  test('displays current year in copyright', () => {
    renderWithRouter(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  test('has proper contentinfo role', () => {
    renderWithRouter(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar Component', () => {
  test('renders company name', () => {
    renderWithRouter(<Navbar />);
    const brandElement = screen.getByText(/PhilPaint/i);
    expect(brandElement).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    renderWithRouter(<Navbar />);
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();
  });

  test('has mobile menu toggle button', () => {
    renderWithRouter(<Navbar />);
    const toggleButton = screen.getByLabelText(/toggle navigation menu/i);
    expect(toggleButton).toBeInTheDocument();
  });
});

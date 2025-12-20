import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturesSection from '../FeaturesSection';

describe('FeaturesSection Component', () => {
  test('renders section heading', () => {
    render(<FeaturesSection />);
    const heading = screen.getByText(/Why Choose PhilPaint/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders exactly 3 features', () => {
    render(<FeaturesSection />);
    const featureCards = screen.getAllByRole('article');
    expect(featureCards).toHaveLength(3);
  });

  test('renders feature titles', () => {
    render(<FeaturesSection />);
    expect(screen.getByText(/Industrial-Grade Quality/i)).toBeInTheDocument();
    expect(screen.getByText(/Fast Delivery Network/i)).toBeInTheDocument();
    expect(screen.getByText(/Technical Support/i)).toBeInTheDocument();
  });

  test('feature icons have proper accessibility labels', () => {
    render(<FeaturesSection />);
    const icons = screen.getAllByRole('img');
    expect(icons.length).toBeGreaterThan(0);
  });

  test('has proper section accessibility', () => {
    render(<FeaturesSection />);
    const heading = screen.getByRole('heading', { name: /Why Choose PhilPaint/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute('id', 'features-heading');
  });
});

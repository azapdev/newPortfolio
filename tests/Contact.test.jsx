import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

describe('Contact & Footer', () => {
  it('renders contact section', () => {
    const { getByText } = render(<Contact />);
    expect(getByText("Let's Build Something Exceptional")).toBeDefined();
  });
  it('renders footer', () => {
    const { getAllByText } = render(<Footer />);
    expect(getAllByText(/Ahmed Elazap/).length).toBeGreaterThan(0);
  });
});

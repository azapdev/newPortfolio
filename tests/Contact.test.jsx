import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

describe('Contact & Footer', () => {
  it('renders contact section', () => {
    const { getByText } = render(<Contact />);
    expect(getByText("Let's Talk")).toBeDefined();
  });
  it('renders footer', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/All rights reserved/)).toBeDefined();
  });
});

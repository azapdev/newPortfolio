import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders logo and navigation links', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByText('M.')).toBeDefined();
    expect(getByText('Contact Me')).toBeDefined();
    expect(getByText('Home')).toBeDefined();
    expect(getByText('About')).toBeDefined();
    expect(getByText('Skills')).toBeDefined();
    expect(getByText('Projects')).toBeDefined();
    expect(getByText('Gallery')).toBeDefined();
    expect(getByText('Resume')).toBeDefined();
  });
});

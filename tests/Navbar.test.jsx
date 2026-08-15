import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../src/components/Navbar';

describe('Navbar Component', () => {
  it('renders logo and navigation links', () => {
    const { getByText, getAllByText } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(getByText('Ahmed Elazap')).toBeDefined();
    expect(getAllByText('Contact Me').length).toBeGreaterThan(0);
    expect(getAllByText('Home').length).toBeGreaterThan(0);
    expect(getAllByText('About').length).toBeGreaterThan(0);
    expect(getAllByText('Skills').length).toBeGreaterThan(0);
    expect(getAllByText('Projects').length).toBeGreaterThan(0);
    expect(getAllByText('Gallery').length).toBeGreaterThan(0);
    expect(getAllByText(/CV/i).length).toBeGreaterThan(0);
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from '../src/components/About';

describe('About Component', () => {
  it('renders about section with stat cards', () => {
    const { getByText, container } = render(<About />);
    expect(container.querySelector('#about')).toBeDefined();
    expect(getByText('About Me')).toBeDefined();
    expect(getByText('Bridging Healthcare & Tech')).toBeDefined();
    expect(getByText('Apps Built')).toBeDefined();
    expect(getByText('10+')).toBeDefined();
    expect(getByText('Dental Year')).toBeDefined();
    expect(getByText('3rd')).toBeDefined();
    expect(getByText('Projects')).toBeDefined();
    expect(getByText('25+')).toBeDefined();
    expect(getByText('Status')).toBeDefined();
    expect(getByText('Always Learning')).toBeDefined();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import About from '../src/components/About';

describe('About Component', () => {
  it('renders about section with stat cards', () => {
    const { getByText, container } = render(<About />);
    expect(container.querySelector('#about')).toBeDefined();
    expect(getByText(/About Ahmed Elazap/i)).toBeDefined();
    expect(getByText('Years Experience')).toBeDefined();
    expect(getByText('3+')).toBeDefined();
    expect(getByText('Web Apps Shipped')).toBeDefined();
    expect(getByText('20+')).toBeDefined();
    expect(getByText('Design Systems')).toBeDefined();
    expect(getByText('15+')).toBeDefined();
    expect(getByText('Code Reliability')).toBeDefined();
    expect(getByText('100%')).toBeDefined();
  });
});

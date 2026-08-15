import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero Component', () => {
  it('renders hero content', () => {
    const { getByText, getAllByText, getByRole, container } = render(<Hero />);
    expect(container.querySelector('#home')).toBeDefined();
    expect(getByText(/👋 Hi, I'm Mohamed/i)).toBeDefined();
    expect(getAllByText(/Dental Student/i).length).toBeGreaterThan(0);
    expect(getAllByText(/App Developer/i).length).toBeGreaterThan(0);
    expect(getByRole('heading', { level: 1 })).toBeDefined();
    
    const workLink = getByText('View My Work');
    expect(workLink).toBeDefined();
    expect(workLink.getAttribute('href')).toBe('#projects');

    const resumeLink = getByText('Download Resume');
    expect(resumeLink).toBeDefined();
    expect(resumeLink.getAttribute('href')).toBe('/resume.pdf');

    expect(
      getByText((_, el) => el?.tagName?.toLowerCase() === 'h1' && el?.textContent?.replace(/\s+/g, ' ').includes('Dental Student & App Developer'))
    ).toBeDefined();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Hero from '../src/components/Hero';

describe('Hero Component', () => {
  it('renders hero content', () => {
    const { getByText, getAllByText, getByRole, container } = render(<Hero />);
    expect(container.querySelector('#home')).toBeDefined();
    expect(getByText(/Ahmed Elazap • Front-End & Web-App Developer/i)).toBeDefined();
    expect(getAllByText(/Liquid Glass/i).length).toBeGreaterThan(0);
    expect(getByRole('heading', { level: 1 })).toBeDefined();
    
    const workLink = getByText('Explore Projects');
    expect(workLink).toBeDefined();
    expect(workLink.getAttribute('href')).toBe('#projects');

    const contactLink = getByText('Get In Touch');
    expect(contactLink).toBeDefined();
    expect(contactLink.getAttribute('href')).toBe('#contact');
  });
});

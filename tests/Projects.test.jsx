import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Projects from '../src/components/Projects';

describe('Projects Component', () => {
  it('renders projects section with heading and cards', () => {
    const { getByText, getAllByText, container } = render(<Projects />);
    expect(container.querySelector('#projects')).toBeDefined();
    expect(getByText("Selected Web-Apps & Projects")).toBeDefined();
    expect(getByText("L'Épicurieux Restaurant & Bar")).toBeDefined();
    expect(getByText("The Mighty Spice Co.")).toBeDefined();
    expect(getByText("Porty Hotel & Stay Platform")).toBeDefined();
    expect(getByText("Ashely Digital Agency")).toBeDefined();
    expect(getByText("PulseFit Gym & Wellness")).toBeDefined();
    expect(getAllByText(/View Website/i).length).toBe(5);
    expect(getAllByText(/Source/i).length).toBe(5);
  });
});

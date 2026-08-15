import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Projects from '../src/components/Projects';

describe('Projects Component', () => {
  it('renders projects section with heading and cards', () => {
    const { getByText, getAllByText, container } = render(<Projects />);
    expect(container.querySelector('#projects')).toBeDefined();
    expect(getByText("Selected Web-Apps & Projects")).toBeDefined();
    expect(getByText("LiquidGlass Studio Platform")).toBeDefined();
    expect(getByText("Pulse Commerce Web-App")).toBeDefined();
    expect(getByText("Nexus AI Workflow Studio")).toBeDefined();
    expect(getByText("Aura Glass UI Design System")).toBeDefined();
    expect(getAllByText(/Launch Application/i).length).toBe(4);
    expect(getAllByText(/Source Code/i).length).toBe(4);
  });
});

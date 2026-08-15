import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Projects from '../src/components/Projects';

describe('Projects Component', () => {
  it('renders projects section with heading and cards', () => {
    const { getByText, getAllByText, container } = render(<Projects />);
    expect(container.querySelector('#projects')).toBeDefined();
    expect(getByText("What I've Built")).toBeDefined();
    expect(getByText("DentalSync App")).toBeDefined();
    expect(getByText("Study Timer")).toBeDefined();
    expect(getByText("A clinic management mobile app for tracking patient records.")).toBeDefined();
    expect(getByText("Pomodoro-style app for medical students with custom intervals.")).toBeDefined();
    expect(getByText("Kotlin")).toBeDefined();
    expect(getByText("Firebase")).toBeDefined();
    expect(getByText("Flutter")).toBeDefined();
    expect(getByText("Dart")).toBeDefined();
    expect(getAllByText(/Live Demo/i).length).toBe(2);
    expect(getAllByText(/GitHub/i).length).toBe(2);
  });
});

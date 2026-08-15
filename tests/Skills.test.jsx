import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Skills from '../src/components/Skills';

describe('Skills Component', () => {
  it('renders skill categories and items', () => {
    const { getByText, container } = render(<Skills />);
    expect(container.querySelector('#skills')).toBeDefined();
    expect(getByText(/Frontend Core/i)).toBeDefined();
    expect(getByText(/Web-App & State/i)).toBeDefined();
    expect(getByText(/Tooling & Design/i)).toBeDefined();
    expect(getByText('React.js')).toBeDefined();
    expect(getByText('TypeScript')).toBeDefined();
  });

  it('switches between skill tabs', async () => {
    const { getByText, findByText } = render(<Skills />);
    
    // Initially frontend skills are visible
    expect(getByText('React.js')).toBeDefined();

    // Click Web-App tab
    const webAppTab = getByText(/Web-App & State/i);
    fireEvent.click(webAppTab);

    // Web-App skills should be visible
    expect(await findByText('State Management')).toBeDefined();
    expect(await findByText('Framer Motion')).toBeDefined();

    // Click Tooling tab
    const toolsTab = getByText(/Tooling & Design/i);
    fireEvent.click(toolsTab);

    // Tooling skills should be visible
    expect(await findByText('Git & GitHub')).toBeDefined();
    expect(await findByText('Vercel Deployment')).toBeDefined();
  });
});

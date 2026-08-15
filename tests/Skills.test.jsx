import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Skills from '../src/components/Skills';

describe('Skills Component', () => {
  it('renders tech and dental skill tabs', () => {
    const { getByText, container } = render(<Skills />);
    expect(container.querySelector('#skills')).toBeDefined();
    expect(getByText(/Tech Skills/i)).toBeDefined();
    expect(getByText(/Dental Focus/i)).toBeDefined();
    expect(getByText('Kotlin')).toBeDefined();
    expect(getByText('Flutter')).toBeDefined();
  });

  it('switches between tech and dental tabs', async () => {
    const { getByText, findByText } = render(<Skills />);
    
    // Initially tech skills are visible
    expect(getByText('Kotlin')).toBeDefined();

    // Click Dental tab
    const dentalTab = getByText(/Dental Focus/i);
    fireEvent.click(dentalTab);

    // Dental skills should be visible
    expect(await findByText('Oral Pathology')).toBeDefined();
    expect(await findByText('Restorative Dentistry')).toBeDefined();
    expect(await findByText('Radiography')).toBeDefined();
    expect(await findByText('Patient Care')).toBeDefined();

    // Click Tech tab
    const techTab = getByText(/Tech Skills/i);
    fireEvent.click(techTab);

    // Tech skills should be visible again
    expect(await findByText('Kotlin')).toBeDefined();
    expect(await findByText('Android Studio')).toBeDefined();
  });
});

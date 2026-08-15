import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Setup', () => {
  it('renders without crashing', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText(/Ahmed Elazap/i).length).toBeGreaterThan(0);
    expect(getAllByText(/Front-End & Web-App Developer/i).length).toBeGreaterThan(0);
  });
});

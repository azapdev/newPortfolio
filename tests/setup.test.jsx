import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App Setup', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Portfolio')).toBeDefined();
  });
});

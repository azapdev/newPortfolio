import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Gallery from '../src/pages/Gallery';

describe('Gallery Page', () => {
  it('renders gallery grid', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Gallery />
      </BrowserRouter>
    );
    expect(getByText('Design & Web-App Gallery')).toBeDefined();
  });
});

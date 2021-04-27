import * as React from 'react';
import { render } from '@testing-library/react';
import { BasicSiteHeader } from './site-header.composition';

describe('site-header', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicSiteHeader />);
    const rendered = getByText('hello from SiteHeader');
    expect(rendered).toBeTruthy();
  });
});

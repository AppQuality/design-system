import * as React from 'react';
import { render } from '@testing-library/react';
import { LoggedOutHeader, LoggedInHeader } from './site-header.compositions';

describe('site-header', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<LoggedOutHeader />);
    const rendered = getByText('login');
    expect(rendered).toBeTruthy();
  });
});

describe('site-header', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<LoggedInHeader />);
    const rendered = getByText('logout');
    expect(rendered).toBeTruthy();
  });
});

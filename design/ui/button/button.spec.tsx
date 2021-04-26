import * as React from 'react';
import { render } from '@testing-library/react';
import { BasicButton } from './button.composition';

describe('button', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicButton />);
    const rendered = getByText('hello from Button');
    expect(rendered).toBeTruthy();
  });
});

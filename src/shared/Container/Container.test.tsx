import React from 'react';
import { render } from '@testing-library/react';
import Container from '.';

describe('Container', () => {
  test('renders children inside the container', () => {
    const childrenText = 'Hello, World!';
    const { getByText } = render(<Container>{childrenText}</Container>);
    const childrenElement = getByText(childrenText);
    expect(childrenElement).toBeInTheDocument();
  });
});

import {render, screen} from '@testing-library/react';
// Import userEvent from '@testing-library/user-event';
import LoadingComponent from '../UI/LoadingComponent';
import React from 'react';
import '@testing-library/jest-dom';

describe('LoadingComponent', () => {
  it('renders', () => {
    render(<LoadingComponent />);
    expect(screen.getByTestId('container')).toHaveClass('loading-container');
  });
});

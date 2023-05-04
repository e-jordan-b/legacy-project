import React from 'react';
import {render} from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
	it('should render the Layout component', () => {
		const {getByTestId} = render(<HomePage />);
		expect(getByTestId('layout-component')).toBeInTheDocument();
	});
});

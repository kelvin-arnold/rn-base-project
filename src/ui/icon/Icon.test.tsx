import React from 'react';
import {render} from '../../utils/test';
import Icon from './Icon';

test('should render Container component', () => {
	render(<Icon source="Back" tintColor="Dark" />);
});

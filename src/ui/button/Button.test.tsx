import React from 'react';
import {render} from '../../utils/test';
import Button from './Button';

test('should render Button component', () => {
	render(<Button label="Button" onPress={() => {}} preset="primary" />);
});

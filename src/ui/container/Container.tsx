import React from 'react';
import {SafeContainer, CommonContainer} from './Container.styled';

// Interaces
type IProps = {
	readonly safe?: boolean;
	readonly dark?: boolean;
	readonly center?: boolean;
};

// Component
const Container: React.FC<IProps> = ({safe, dark, children, center = true}) => {
	return safe ? (
		<SafeContainer {...{dark, center}}>{children}</SafeContainer>
	) : (
		<CommonContainer {...{dark, center}}>{children}</CommonContainer>
	);
};

export default Container;

import React from 'react';
import {TextContainer, TextLabel} from './Text.styled';
import {Colors} from './../../theme/colors';

export {Colors};

// Enums
export enum Preset {
	'title',
	'body',
	'label',
}

// Interfaces
export interface TextProps {
	readonly preset?: keyof typeof Preset;
	readonly color?: keyof typeof Colors;
}

// Component
const Text: React.FC<TextProps> = ({
	preset = 'body',
	color = 'Dark',
	children,
	...args
}) => {
	return (
		<TextContainer>
			<TextLabel {...{preset, color, ...args}}>{children || 'Label'}</TextLabel>
		</TextContainer>
	);
};

export default Text;

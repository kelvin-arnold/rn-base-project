import styled from 'styled-components/native';
import {Preset, Colors} from './Text';

// Types
type TextLabelProps = {
	readonly preset: keyof typeof Preset;
	readonly color: keyof typeof Colors;
};

// Components
export const TextContainer = styled.View``;

export const TextLabel = styled.Text<TextLabelProps>`
	color: ${({color}) => Colors[color]};
	font-size: ${({preset, theme}) => theme.textSizes[preset]};
`;

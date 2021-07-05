import styled from 'styled-components/native';
import {ButtonPreset} from './Button';

// Types
type ButtomWrapperProps = {
	readonly preset: keyof typeof ButtonPreset;
	readonly isBlock: boolean;
	readonly disabled: boolean;
};
type ButtomLabelProps = {
	readonly preset: keyof typeof ButtonPreset;
};

// Components
export const ButtonWrapper = styled.View<ButtomWrapperProps>`
	background-color: ${({theme, preset, disabled}) =>
		disabled ? theme.colors.lightGrey : theme.colors[preset]};
	width: ${({isBlock}) => (isBlock ? '100%' : 'auto')};
	text-align: center;
	padding: 20px;
	justify-content: center;
	align-items: center;
`;

export const ButtonLabel = styled.Text<ButtomLabelProps>`
	font-size: ${({theme}) => theme.textSizes.body};
	color: ${({theme, preset}) =>
		preset === 'primary' || preset === 'dark'
			? theme.colors.light
			: theme.colors.dark};
`;

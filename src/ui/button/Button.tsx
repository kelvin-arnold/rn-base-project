import React from 'react';
import {ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import {ButtonWrapper, ButtonLabel} from './Button.styled';

// Enums
export enum ButtonPreset {
	'primary',
	'secondary',
	'light',
	'dark',
}

// Interfaces
export interface ButtonProps {
	readonly preset: keyof typeof ButtonPreset;
	readonly label: string;
	readonly onPress: () => void;
	readonly loading?: boolean;
	readonly isBlock?: boolean;
	readonly disabled?: boolean;
}

// Component
const Button: React.VFC<ButtonProps> = ({
	label,
	preset = 'primary',
	onPress = () => {},
	loading = false,
	isBlock = false,
	disabled = false,
	...args
}) => {
	return (
		<TouchableWithoutFeedback
			{...{
				onPress: () => (!disabled ? onPress() : {}),
			}}>
			<ButtonWrapper
				{...{
					preset,
					isBlock,
					disabled,
					...args,
				}}>
				{loading ? (
					<ActivityIndicator size="small" />
				) : (
					<ButtonLabel {...{preset}}>{label}</ButtonLabel>
				)}
			</ButtonWrapper>
		</TouchableWithoutFeedback>
	);
};

export default Button;

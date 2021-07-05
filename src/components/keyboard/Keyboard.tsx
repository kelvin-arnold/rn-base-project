import React, {ReactNode} from 'react';
import {Platform, Keyboard, KeyboardAvoidingViewProps} from 'react-native';
import {
	KeyboardContainer,
	KeyboardDismiss,
	KeyboardBlock,
} from './Keyboard.styled';

interface IProps extends KeyboardAvoidingViewProps {
	children: ReactNode;
	hasKeyboardDismiss?: boolean;
	paddingPageSheet?: boolean;
}

export default ({hasKeyboardDismiss = true, children, ...args}: IProps) => {
	return (
		<KeyboardContainer
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			enabled
			{...args}>
			<KeyboardDismiss
				onPress={hasKeyboardDismiss ? Keyboard.dismiss : () => {}}>
				<KeyboardBlock>{children}</KeyboardBlock>
			</KeyboardDismiss>
		</KeyboardContainer>
	);
};

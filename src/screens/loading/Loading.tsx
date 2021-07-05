import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container, Text} from './../../ui';

// Interfaces
interface ILoading {
	readonly message?: string;
}

// Screen
const LoadingScreen: React.FC<ILoading> = ({message = 'Loading..'}) => {
	return (
		<Container safe center>
			<ActivityIndicator />
			<Text preset="body">{message}</Text>
		</Container>
	);
};

export default LoadingScreen;

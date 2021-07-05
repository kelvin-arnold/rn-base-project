import React from 'react';
import {BodyContainer, FooterContainer} from './Onboarding.styled';
import {Text, Button, Container} from '../../ui';
import {PropsAuth} from '../../routes/auth/routes.props';

// Screen
const Onboarding: React.FC<PropsAuth> = ({navigation}) => {
	return (
		<Container safe center>
			<BodyContainer>
				<Text preset="title">Onboarding Screen</Text>
				<Text color="Primary">Not logged area</Text>
			</BodyContainer>
			<FooterContainer>
				<Button
					label="Sign in"
					preset="primary"
					onPress={() => navigation.navigate('AuthSignIn')}
				/>
			</FooterContainer>
		</Container>
	);
};

export default Onboarding;

import React, {useContext} from 'react';
import AuthContext from '../../context/auth';
import {BodyContainer, FooterContainer} from './Home.styled';
import {Text, Button, Container} from '../../ui';

// Screen
const Home = () => {
	const {clearSession} = useContext(AuthContext);
	return (
		<Container safe>
			<BodyContainer>
				<Text>Home Screen</Text>
			</BodyContainer>
			<FooterContainer>
				<Button
					label="Logout"
					preset="primary"
					onPress={() => clearSession()}
				/>
			</FooterContainer>
		</Container>
	);
};

export default Home;

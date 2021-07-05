import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components/native';
import {SignIn, Onboarding} from './../../screens';
import {RootAuth} from './routes.props';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Icon} from './../../ui';
import Config from 'react-native-config';

const AuthStack = createStackNavigator<RootAuth>();

const AuthRouter: React.FC = () => {
	const theme = useContext(ThemeContext);
	return (
		<AuthStack.Navigator
			initialRouteName="AuthOnboarding"
			screenOptions={{
				headerLeftContainerStyle: {paddingLeft: 25},
				headerRightContainerStyle: {paddingRight: 25},
				headerTransparent: false,
				headerStyle: {
					elevation: 0,
					shadowOffset: {
						height: 0,
						width: 0,
					},
				},
			}}>
			<AuthStack.Screen
				options={() => {
					return {
						headerTitle: () => null,
						headerRight: () => (
							<Text preset="body" color="Primary">
								Enviroment: {Config.ENV_NAME}
							</Text>
						),
					};
				}}
				name="AuthOnboarding"
				component={Onboarding}
			/>
			<AuthStack.Screen
				options={{
					headerBackTitle: 'Back',
					headerBackImage: () => <Icon source="Back" tintColor="Primary" />,
					headerBackTitleStyle: {
						fontSize: 15,
						color: theme.colors.dark,
						fontWeight: '600',
					},
					headerTitle: '',
				}}
				name="AuthSignIn"
				component={SignIn}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthRouter;

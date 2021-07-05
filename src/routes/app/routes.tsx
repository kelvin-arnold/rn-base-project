import React from 'react';
import {Home} from './../../screens';
import {RootApp} from './routes.props';
import {
	createStackNavigator,
	StackNavigationOptions,
} from '@react-navigation/stack';

const AuthStack = createStackNavigator<RootApp>();

const NoHeaderOptions: StackNavigationOptions = {
	headerShown: false,
};

const AuthRouter: React.FC = () => {
	return (
		<AuthStack.Navigator
			initialRouteName="AppHome"
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
				options={NoHeaderOptions}
				name="AppHome"
				component={Home}
			/>
		</AuthStack.Navigator>
	);
};

export default AuthRouter;

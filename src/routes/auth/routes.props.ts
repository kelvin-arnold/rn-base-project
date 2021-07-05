import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum EAuth {
	'AuthSignIn' = 'AuthSignIn',
	'AuthOnboarding' = 'AuthOnboarding',
}

export type RootAuth = {
	AuthSignIn: undefined;
	AuthOnboarding: undefined;
};

export type AuthScreenRouteProp = RouteProp<RootAuth, 'AuthOnboarding'>;

export type AuthScreenNavigationProp = StackNavigationProp<
	RootAuth,
	'AuthOnboarding'
>;

export type PropsAuth = {
	route: AuthScreenRouteProp;
	navigation: AuthScreenNavigationProp;
};

import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum EAuth {
	'AppHome' = 'AppHome',
}

export type RootApp = {
	AppHome: undefined;
};

export type AppScreenRouteProp = RouteProp<RootApp, 'AppHome'>;

export type AppScreenNavigationProp = StackNavigationProp<RootApp, 'AppHome'>;

export type PropsAuth = {
	route: AppScreenRouteProp;
	navigation: AppScreenNavigationProp;
};

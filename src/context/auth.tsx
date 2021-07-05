import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {User} from '../@types/user';

interface AuthContextData {
	appLoading: boolean;
	signed: boolean;
	accessToken: string | null;
	user: User | null;
	signOut: () => void;
	setSession: (user: User, accessToken: string) => void;
	clearSession: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
	// States
	const [user, setUser] = useState<User | null>(null);
	const [signed, setSigned] = useState<boolean>(false);
	const [accessToken, setAccessToken] = useState<string | null>(null);
	const [appLoading, setAppLoading] = useState<boolean>(true);
	// Effects
	useEffect(() => {
		(async () => {
			const storageUser = await AsyncStorage.getItem('@Auth:user');
			const storageToken = await AsyncStorage.getItem('@Auth:token');
			if (storageUser && storageToken) {
				const userParse = JSON.parse(storageUser);
				setUser(userParse);
				setAccessToken(storageToken);
				setSigned(true);
			}
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve(true);
				}, 2000),
			);
			setAppLoading(false);
		})();
	}, [signed]);
	// signOut
	const signOut = async () => {
		setTimeout(() => {
			AsyncStorage.clear().then(() => {
				setUser(null);
				setAccessToken(null);
				setSigned(false);
			});
		}, 3000);
	};
	// setSession
	const setSession = (pUser: User, pAccessToken: string) => {
		AsyncStorage.setItem('@Auth:user', JSON.stringify(pUser));
		AsyncStorage.setItem('@Auth:token', pAccessToken);
		setSigned(true);
	};
	// clearSession
	const clearSession = () => {
		AsyncStorage.removeItem('@Auth:user');
		AsyncStorage.removeItem('@Auth:token');
		setSigned(false);
	};
	return (
		<AuthContext.Provider
			value={{
				user,
				signed,
				signOut,
				accessToken,
				appLoading,
				setSession,
				clearSession,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

import React, {useContext} from 'react';
import AppRouter from './app/routes';
import AuthRouter from './auth/routes';
import AuthContext from '../context/auth';
import LoadingScreen from './../screens/loading/Loading';

const Routes: React.FC = () => {
	const {appLoading, signed, user} = useContext(AuthContext);
	console.log([signed, user]);
	if (appLoading) {
		return <LoadingScreen message="Loading informations" />;
	}
	return signed ? <AppRouter /> : <AuthRouter />;
};

export default Routes;

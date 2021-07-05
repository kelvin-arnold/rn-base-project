import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {AuthProvider} from './context/auth';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {defaultTheme} from './theme/theme';
import {ApolloProvider} from '@apollo/client';
import {client} from './service/config';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<ApolloProvider {...{client}}>
				<SafeAreaProvider>
					<NavigationContainer>
						<AuthProvider>
							<Routes />
						</AuthProvider>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApolloProvider>
		</ThemeProvider>
	);
};

export default App;

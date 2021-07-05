import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	from,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

// Http Link connection
const httpLink = createHttpLink({
	uri: `${Config.API_URL}`,
	credentials: 'same-origin',
});

// Middleware
const authMiddleware = setContext(async (_, {headers}) => {
	const storageToken = await AsyncStorage.getItem('@Auth:token');
	return {
		headers: {
			...headers,
			authorization: storageToken ? `Bearer ${storageToken}` : null,
		},
	};
});

const error = onError(({graphQLErrors, networkError}) => {
	if (graphQLErrors) {
		graphQLErrors.map(({message, locations, path}) =>
			console.log(
				`🛑 [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	}
	if (networkError) {
		console.log(`[Network error]: ${networkError}`);
	}
});

export const client = new ApolloClient({
	link: from([error, authMiddleware, httpLink]),
	cache: new InMemoryCache(),
});

import {DefaultTheme} from 'styled-components';
import {Colors} from './colors';
import {Icons} from './icons';
import {TextSizes} from './textSizes';

export const defaultTheme: DefaultTheme = {
	colors: {
		primary: Colors.Primary,
		secondary: Colors.Secondary,
		light: Colors.Light,
		lightGrey: Colors.LigthGrey,
		dark: Colors.Dark,
		red: Colors.Red,
	},
	textSizes: {
		title: TextSizes.Title,
		body: TextSizes.Body,
		input: TextSizes.Input,
		label: TextSizes.Label,
	},
	icons: {
		back: Icons.Back,
	},
};

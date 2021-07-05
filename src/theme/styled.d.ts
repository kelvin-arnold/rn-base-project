import 'styled-components/native';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: string;
			secondary: string;
			light: string;
			lightGrey: string;
			dark: string;
			red: string;
		};
		textSizes: {
			title: string;
			body: string;
			input: string;
			label: string;
		};
		icons: {
			back: any;
		};
	}
}

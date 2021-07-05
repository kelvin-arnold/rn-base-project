import React, {FC, ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from '../../theme/theme';

const AllProvider: FC = ({children}) => (
	<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>,
) => render(ui, {wrapper: AllProvider, ...options});

export * from '@testing-library/react-native';

export {customRender as render};

import styled, {DefaultTheme} from 'styled-components/native';
import {IProps, Icons} from './Icon';

export interface IStyledProps extends IProps {
	readonly theme: DefaultTheme;
}

export const Icon = styled.Image.attrs(({source}: IStyledProps) => ({
	source: Icons[source],
}))<IStyledProps>`
	${({theme, tintColor}) =>
		tintColor && `tint-color: ${(theme.colors as any)[tintColor]};`}
	height: 24px;
	width: 24px;
`;

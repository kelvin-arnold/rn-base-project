import styled from 'styled-components/native';

type Props = {
	readonly dark?: boolean;
	readonly center?: boolean;
};

export const SafeContainer = styled.SafeAreaView<Props>`
	background-color: ${({dark, theme}) =>
		dark ? theme.colors.dark : '#FFFFFF'};
	flex: 1;
	width: 100%;
	${({center}) => center && 'justify-content: center; align-items: center'};
`;

export const CommonContainer = styled.View<Props>`
	background-color: ${({dark, theme}) =>
		dark ? theme.colors.dark : theme.colors.light};
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

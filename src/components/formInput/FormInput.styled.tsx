import styled from 'styled-components/native';

export const InputWrapper = styled.View``;

export const Input = styled.TextInput`
	height: 54px;
	width: 100%;
	background-color: ${({theme}) => theme.colors.light};
	padding-left: 14px;
	padding-right: 14px;
	margin-top: 4px;
	margin-bottom: 8px;
`;

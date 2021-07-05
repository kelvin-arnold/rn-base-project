import React, {useContext} from 'react';
import AuthContext from '../../context/auth';
import * as yup from 'yup';
import {BodyContainer, FooterContainer, FormContainer} from './SignIn.styled';
import {Text, Button, Container} from '../../ui';
import {FormInput, Keyboard} from '../../components';
import {PropsAuth} from '../../routes/auth/routes.props';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

// Interfaces
interface ISignIn {
	username: string;
}

// Schemas Validations
const formSchema = yup.object().shape({
	username: yup.string().required(),
});

// Screen
const SignIn: React.FC<PropsAuth> = () => {
	const {setSession} = useContext(AuthContext);
	const {
		control,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({
		resolver: yupResolver(formSchema),
		mode: 'onChange',
	});
	const onSubmit = (values: ISignIn) => {
		setSession(
			{
				userName: values.username,
			}, // TODO: replace her a real user information
			'access_token', // TODO: replace her a real token access
		);
	};
	return (
		<Keyboard hasKeyboardDismiss>
			<Container safe>
				<BodyContainer>
					<Text preset="title">Login Screen</Text>
					<FormContainer>
						<FormInput
							label="Username"
							name="username"
							placeholder="Insert username her"
							error={errors['username']}
							{...{control}}
						/>
					</FormContainer>
				</BodyContainer>
				<FooterContainer>
					<Button
						label="Entrar"
						preset="primary"
						onPress={handleSubmit(onSubmit)}
						disabled={!isValid}
					/>
				</FooterContainer>
			</Container>
		</Keyboard>
	);
};

export default SignIn;

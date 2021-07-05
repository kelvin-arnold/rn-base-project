import React from 'react';
import {Controller, Control, FieldError} from 'react-hook-form';
import {InputWrapper, Input} from './FormInput.styled';
import {Text} from '../../ui';

interface IFormInput {
	label: string;
	placeholder: string;
	control: Control;
	error: FieldError;
	name: string;
}

const FormInput: React.FC<IFormInput> = ({
	control,
	name,
	placeholder,
	label,
	error,
	...props
}) => {
	return (
		<InputWrapper>
			{label && <Text>{label}</Text>}
			<Controller
				{...{
					...props,
					control,
					name,
					render: ({field: {onChange, ...args}}) => (
						<Input {...{placeholder, ...args}} onChangeText={onChange} />
					),
				}}
			/>
			{error && <Text color="Red">Error: {error.message}</Text>}
		</InputWrapper>
	);
};

export default FormInput;

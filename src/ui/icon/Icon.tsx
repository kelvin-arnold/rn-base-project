import React from 'react';
import {ImageProps} from 'react-native';
import {Colors} from './../../theme/colors';
import {Icons} from './../../theme/icons';
import {Icon} from './Icon.styled';

export {Icons, Colors};

// Interfaces
export interface IProps {
	readonly source: keyof typeof Icons;
	readonly tintColor?: keyof typeof Colors;
	readonly style?: ImageProps;
}

// Component
const IconComponent: React.FC<IProps> = ({...args}) => {
	return <Icon {...{...args}} />;
};

export default IconComponent;
